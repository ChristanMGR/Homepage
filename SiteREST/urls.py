from django.urls import path
from .views import PostList, PostSingle, PostCreate, PostSingleDel, PostSingleUpdate, ProjectList, ProjectSingleDel, ProjectSingleUpdate, ProjectCreate, FeedbackList, FeedbackCreate, ImgList,FeedbackSingleDel, FeedbackSingleUpdate 
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)




urlpatterns = [
    path('blog/', PostList.as_view() ),
    # path('blog/create', PostCreate.as_view() ),
    path('blog/<int:pk>', PostSingle.as_view() ),
    # path('blog/delete/<int:pk>', PostSingleDel.as_view() ),
    # path('blog/update/<int:pk>', PostSingleUpdate.as_view() ),
    
    path('projects/', ProjectList.as_view() ),
    # path('project/create', ProjectCreate.as_view() ),
    # #path('project/<int:pk>', ProjectSingle.as_view() ),
    # path('project/delete/<int:pk>', ProjectSingleDel.as_view() ),
    # path('project/update/<int:pk>', ProjectSingleUpdate.as_view() ),

    path('feedback/', FeedbackList.as_view() ),
    path('feedback/create', FeedbackCreate.as_view() ),
    path('feedback/delete/<int:pk>', FeedbackSingleDel.as_view() ),
    path('feedback/update/<int:pk>', FeedbackSingleUpdate.as_view() ),

    path('images/', ImgList.as_view() ),

    
    # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    
    
]