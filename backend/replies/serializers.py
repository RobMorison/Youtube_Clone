from rest_framework import serializers
from .models import Replies

class RepliesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Replies
        fields = ['id', 'text', 'user_id', 'comment_id']
        depth = 1