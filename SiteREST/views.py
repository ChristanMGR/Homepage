from django.shortcuts import render, get_object_or_404
from .models import BlogPost, Project, Feedback, BackgroundImages
from rest_framework import generics
from rest_framework.views import APIView
from .serializers import PostSerializer, ProjectSerializer, FeedbackSerializer, ImageSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status 
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, DjangoModelPermissionsOrAnonReadOnly
from rest_framework.pagination import PageNumberPagination
import os 


# Create your views here.


from django.shortcuts import render
from .models import BlogPost, Project, Feedback
from rest_framework import generics
from .serializers import PostSerializer, ProjectSerializer, FeedbackSerializer


# Create your views here.

class MyCustomPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = 'page_size'
    def get_paginated_response(self, data):
        return Response({
            'page_size': self.page_size,
            'total_objects': self.page.paginator.count,
            'total_pages': self.page.paginator.num_pages,
            'current_page_number': self.page.number,
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'results': data,
        })

class PostList(generics.ListAPIView): 
    queryset = BlogPost.objects.all()
    serializer_class = PostSerializer
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    pagination_class = MyCustomPagination


class PostSingle(generics.ListAPIView): 
    queryset = BlogPost.objects.all()
    serializer_class = PostSerializer
    #permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

    def get_queryset(self):
        """
        filtering to get a single post. "pk" is defined in the URL
        """
        pk = self.kwargs['pk']
        return  BlogPost.objects.filter(id=pk)



#View with multiparser and formparser to support img upload
class PostCreate(APIView):
    parser_classes = [MultiPartParser, FormParser]
    permission_classes = [IsAdminUser]

    def post(self, request, format=None):
        print(request.data)
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else: 
            return Response(status=status.HTTP_400_BAD_REQUEST)


class PostSingleDel(generics.DestroyAPIView): 
    queryset = BlogPost.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAdminUser]

class PostSingleUpdate(generics.UpdateAPIView): 
    queryset = BlogPost.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAdminUser]






class ProjectList(generics.ListAPIView): 
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    pagination_class = MyCustomPagination


class ProjectCreate(generics.CreateAPIView): 
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAdminUser]


class ProjectSingleDel(generics.DestroyAPIView): 
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAdminUser]


class ProjectSingleUpdate(generics.UpdateAPIView): 
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAdminUser]



class FeedbackList(generics.ListAPIView): 
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

class FeedbackCreate(generics.CreateAPIView): 
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [IsAdminUser]

class FeedbackSingleDel(generics.DestroyAPIView): 
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [IsAdminUser]

class FeedbackSingleUpdate(generics.DestroyAPIView): 
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [IsAdminUser]



class ImgList(generics.ListAPIView): 
    queryset = BackgroundImages.objects.all()
    serializer_class = ImageSerializer
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]


