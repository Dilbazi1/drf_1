from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .models import Project, TODO
from .serializers import ProjectModelSerializers, TODOModelSerializers
from rest_framework.pagination import LimitOffsetPagination
from .filters import TODOFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import render, get_object_or_404

from rest_framework.response import Response
from rest_framework import status


class ProjectPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializers
    pagination_class = ProjectPagination

    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        name = self.request.query_params.get('name', '')

        projects = Project.objects.all()
        if name:
            projects = projects.filter(name__contains=name)
        return projects


class TODOPagination(LimitOffsetPagination):
    default_limit = 20


class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializers
    pagination_class = TODOPagination
    filterset_class = TODOFilter



    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            instance.is_active = False
            instance.save()
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)
