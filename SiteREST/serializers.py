from rest_framework import serializers
from .models import Project, BlogPost, Feedback


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogPost
        fields = ["title", "text", "pictures", "date", "id", "status"]


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ["title", "excerpt", "explaination", "pictures", "link", "link2", "date", "id", "status"]
        

class FeedbackSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Feedback
        fields = ["title", "text", "work_space", "author", "date", "id"]