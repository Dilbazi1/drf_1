from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework import viewsets, mixins
from .models import User
from .serializers import UserModelSerializer

from rest_framework.renderers import JSONRenderer ,BrowsableAPIRenderer
from rest_framework.decorators import action


# class UserModelViewSet(ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserModelSerializer
class UserCustomViewSet(mixins.UpdateModelMixin,mixins.ListModelMixin, mixins.RetrieveModelMixin,
                     viewsets.GenericViewSet):


    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]

