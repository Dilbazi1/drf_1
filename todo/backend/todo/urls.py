"""todo URL Configuration


The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin

from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from users.views import UserCustomViewSet
from todoapp.views import ProjectModelViewSet, TODOModelViewSet
from rest_framework.authtoken import views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from django.views.generic import TemplateView
from graphene_django.views import GraphQLView

router = DefaultRouter()
filter_router = DefaultRouter()
filter_router.register('project', ProjectModelViewSet)
router.register('users', UserCustomViewSet)
router.register('project', ProjectModelViewSet)
router.register('TODO', TODOModelViewSet)

schema_view = get_schema_view(
    openapi.Info(
        title='Todo',
        default_version=1.0,
        description='Documentation to our project',
        contact=openapi.Contact(email='dilbazi@gmail.com'),
        license=openapi.License(name='MIT license')
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    # path('filters/', include(filter_router.urls)),
    path('api-token-auth/', views.obtain_auth_token),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$',
            schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0),
         name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0),
         name='schema-redoc'),
    path('graphql/', GraphQLView.as_view(graphiql='true')),
    # path('', TemplateView.as_view(template_name='index.html'))

]
