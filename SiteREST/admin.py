from django.contrib import admin
from .models import Project, BlogPost, Feedback, BackgroundImages

# Register your models here.

admin.site.register(Project)
admin.site.register(BlogPost)
admin.site.register(Feedback)
admin.site.register(BackgroundImages)