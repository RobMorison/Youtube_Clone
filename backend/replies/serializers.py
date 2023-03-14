from rest_framework import serializers
from .models import Replies

class RepliesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Replies
        fields = ['id', 'text', 'user', 'comment']
        depth = 1