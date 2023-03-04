from rest_framework.viewsets import ModelViewSet
from .models import Project, TODO
from .serializers import ProjectModelSerializers, TODOModelSerializers
from rest_framework.pagination import LimitOffsetPagination




class ProjectPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializers
    pagination_class = ProjectPagination

    def get_queryset(self):
        name = self.request.query_params.get('name', '')

        projects= Project.objects.all()
        if name:
            projects= projects.filter(name__contains=name)
        return projects




class TODOPagination(LimitOffsetPagination):
    default_limit = 20


class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializers
    pagination_class = TODOPagination
