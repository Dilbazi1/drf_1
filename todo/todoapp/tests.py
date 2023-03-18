from django.test import TestCase
import json
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, \
    APITestCase, APISimpleTestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import ProjectModelViewSet
from users.views import UserCustomViewSet
from .models import Project, TODO
from users.models import User


class TestProjectViewset(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post('api/users/',
        {
            'name':'dilbazi'
        }, format='json')
        view=ProjectModelViewSet.as_view({'post':'create'})
        response=view(request)
        print(response.status_code)
        self.assertEqual(response.status_code,status.HTTP_401_UNAUTHORIZED)