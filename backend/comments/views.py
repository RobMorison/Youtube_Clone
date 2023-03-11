from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comments
from .serializers import CommentsSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):

    
    if request.method =='GET':

        video_id_param = request.query_params.get('video_id')
        queryset = Comments.objects.all()
        if video_id_param:
            queryset = queryset.filter(video_id=video_id_param) 
            # single under core if it is not a PK double underscore if it is a PK
        
        serializer = CommentsSerializer(queryset, many = True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_comments(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CommentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comments = Comments.objects.filter(user_id=request.user.id)
        serializer = CommentsSerializer(comments, many=True)
        return Response(serializer.data)