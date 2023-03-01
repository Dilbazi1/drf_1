from rest_framework.serializers import ModelSerializer
from .models import Project, TODO


class ProjectModelSerializers(ModelSerializer):
    model = Project
    fields = '__all__'


class TODOModelSerializers(ModelSerializer):
    model = TODO
    fields = '__all__'
