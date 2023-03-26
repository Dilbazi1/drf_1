import graphene
from graphene_django import DjangoObjectType
from users.models import User
from todoapp.models import TODO, Project


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class Query(graphene.ObjectType):
    # hello = graphene.String(default_value='hi')
    all_users = graphene.List(UserType)

    def resolve_all_users (root, info):
        return User.objects.all()


schema = graphene.Schema(query=Query)
