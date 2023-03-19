from django.test import TestCase
import json
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, \
    APITestCase, APISimpleTestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from todoapp.views import ProjectModelViewSet
from users.views import UserCustomViewSet
from todoapp.models import Project, TODO
from users.models import User
class TestProjectViewset(TestCase):
    def test_create_admin(self):
        factory = APIRequestFactory()

        request = factory.post('/api/users/', {'firs_name': 'Пушкин','last_name':"alexandr",'username':"pushkin",'email':"pushkin@gmail.com"
                                             }, format='json')
        admin = User.objects.create_superuser('admin', 'admin@admin.com',
                                          'admin123456')
        force_authenticate(request, admin)
        view = UserCustomViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
