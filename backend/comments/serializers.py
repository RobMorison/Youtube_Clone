from rest_framework import serializers
from .models import Comments

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'video_id', 'text', 'like', 'dislikes', 'user_id']
        depth = 1