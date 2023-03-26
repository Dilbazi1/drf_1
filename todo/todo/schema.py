import graphene
from graphene_django import DjangoObjectType
from users.models import User
from todoapp.models import TODO, Project


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


# вывод данных User
# class Query(graphene.ObjectType):
#     # hello = graphene.String(default_value='hi')
#     all_users = graphene.List(UserType)
#
#     def resolve_all_users(root, info):
#         return User.objects.all()


class Query(graphene.ObjectType):
    all_projects = graphene.List(ProjectType)
    all_users = graphene.List(UserType)
    project_by_id = graphene.Field(ProjectType, id=graphene.Int(required=True))
    projects_by_user_id = graphene.List(ProjectType, id=graphene.Int(required=False))

    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_project_by_id(root, info, id):
        try:
            return Project.objects.get(id=id)
        except Project.DoesNotExist:
            return None

    def resolve_projects_by_user_id(root, info, id=None):
        projects = Project.objects.all()
        if id:
            projects = projects.filter(users__id=id)
        return projects


schema = graphene.Schema(query=Query)
