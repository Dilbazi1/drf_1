from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view=get_schema_view(
    openapi.Info(
        title='User',
        default_version=1.0,
        description='Documentation to our project',
        contact=openapi.Contact(email='dilbazi@gmail.com'),
        license=openapi.License(name='MIT license')
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)
urlpatterns = [
re_path(r'^swagger(?P<format>\.json|\.yaml)$',
schema_view.without_ui(cache_timeout=0), name='schema-json'),
path('swagger/', schema_view.with_ui('swagger', cache_timeout=0),
name='schema-swagger-ui'),
path('redoc/', schema_view.with_ui('redoc', cache_timeout=0),
name='schema-redoc'),
]