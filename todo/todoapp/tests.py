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


# class TestProjectViewset(TestCase):
#     def test_get_list(self):
#         factory = APIRequestFactory()
#         request = factory.get('/api/projects/')
#         view = ProjectModelViewSet.as_view({'get': 'list'})
#         response = view(request)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
    # #
    # def test_create_guest(self):
    #     factory = APIRequestFactory()
    #     request = factory.post('api/projects/',
    #                            {
    #                                'name': 'dilbazi'
    #                            }, format='json')
    #     view = ProjectModelViewSet.as_view({'post': 'create'})
    #     response = view(request)
    #     self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    # def test_create_admin(self):
    #     factory=APIRequestFactory()
    #     request=factory.get('api/projects/',
    #     format='json')
    #     admin = User.objects.create_superuser(username='admin', password='admin@admin.com',
    #                                           )
    #     force_authenticate(request,user=admin)
    #     view = ProjectModelViewSet.as_view({'get': 'list'})
    #     response = view(request)
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     print()
    # def test_create_admin(self):
    #     factory=APIRequestFactory()
    #     user=User.objects.create(first_name='dilbazi',last_name='mard',email='d@admin.com',username='dilba')
    #     project=
    #     request=factory.get('api/projects/',
    #     format='json')
    #     admin = User.objects.create_superuser(username='admin', password='admin@admin.com',
    #                                           )
    #     force_authenticate(request,user=admin)
    #     view = ProjectModelViewSet.as_view({'get': 'list'})
    #     response = view(request)
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
