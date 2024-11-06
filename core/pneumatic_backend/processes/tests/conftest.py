import pytest
from pneumatic_backend.generics.tests.clients import PneumaticApiClient


@pytest.fixture(autouse=True)
def session_mock(mocker):
    session = mocker.patch(
        'django.contrib.sessions.backends.cache.SessionStore',
    )
    session.return_value.session_key = 'test'


@pytest.fixture
def api_client():
    return PneumaticApiClient(HTTP_USER_AGENT='Mozilla/5.0')


@pytest.fixture
def analytics_mock(mocker):
    return mocker.patch(
        'pneumatic_backend.processes.views.workflow.AnalyticService'
    )


@pytest.fixture(autouse=True)
def push_service_mock(mocker):
    return mocker.patch(
        'pneumatic_backend.notifications.tasks.'
        'PushNotificationService',
    )
