from django.db import models
from django.utils.translation import gettext_lazy as _


#function for saving the img as the filename in the post folder. Can't use ID here since it's the instance itself and so doesn't have the ID saved yet. 
def upload_to(instance, filename):
    return f"posts/{filename}" 


def upload_blog_to(instance, filename):
    return f"blogposts/{filename}" 

# Create your models here.

class BlogPost(models.Model):


    #model maneger for choosing which post can be see by readers
    class PublicPosts(models.Manager): 
        def get_queryset(self):
            return super().get_queryset().filter(status = "PUBLIC")

    options = (
        ("draft", "DRAFT"),
        ("public", "PUBLIC"),
    )

    title = models.CharField(max_length=250, default="title")
    text =  models.TextField(max_length=600, default="text")
    pictures = models.ImageField(_("Image"), upload_to=upload_blog_to, default="posts/My_img.jpg")
    date = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=20, choices=options, default="draft")

    def __str__(self):
        return self.title
    

class Project(models.Model):

    #model maneger for choosing which post can be see by readers
    class PublicProjet(models.Manager): 
        def get_queryset(self):
            return super().get_queryset().filter(status = "PUBLIC")

    options = (
        ("draft", "DRAFT"),
        ("public", "PUBLIC"),
    )
    
    title = models.CharField(max_length=250, null=True, blank=True)
    excerpt =  models.TextField(null=True, blank=True)
    explaination =  models.TextField(null=True, blank=True)
    #the underscore is in case of translation, making to more easy
    pictures = models.ImageField(_("Image"), upload_to=upload_to, default="posts/My_img.jpg")
    link = models.CharField(max_length=250, null=True, blank=True)
    link2 = models.CharField(max_length=250, null=True, blank=True)
    date = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=20, choices=options, default="draft")
     
    def __str__(self):
        return self.title


class Feedback(models.Model):
    
    title = models.CharField(max_length=250, null=True, blank=True)
    text =  models.TextField(null=True, blank=True, max_length=300)
    author = models.CharField(max_length=250, null=True, blank=True)
    work_space = models.CharField(max_length=250, null=True, blank=True)
    date = models.DateTimeField(auto_now=True)
     
    def __str__(self):
        return self.title