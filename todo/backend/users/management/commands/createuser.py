from django.core.management.base import BaseCommand
from todo.backend.users.models import User


class Command(BaseCommand):
    help = "create user and suoeruser"
    def handle(self, *args, **options):
        User.objects.all().delete()
        User.objects.create_superuser('dilbazi', 'dilbazi1@bk.ru', "mardaliyeva")
        User.objects.create_user('dilbazi1', 'dilbazi11@bk.ru', "mardaliyeva1")
        User.objects.create_user('dilbazi101', 'dilbazi101@bk.ru', "mardaliyeva101")
        print('done')