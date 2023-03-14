from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Replies
from .serializers import RepliesSerializer
from django.shortcuts import get_object_or_404
from comments.models import Comments
from comments.serializers import CommentsSerializer

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_replies(request, fk):
    comment = get_object_or_404(Replies, fk=fk)
    if request.method == 'GET':
        serializer = RepliesSerializer(comment, many=True)
        return Response(serializer.data)
# def post_reply(request, pk):
#     if request.method == 'POST':
#         serializer = CommentsSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save(user=request.text)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)