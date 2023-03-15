from rest_framework.serializers import ModelSerializer
from .models import Project, TODO


class ProjectModelSerializers(ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class TODOModelSerializers(ModelSerializer):
    # project=ProjectModelSerializers()
    class Meta:
        model = TODO
        fields = '__all__'