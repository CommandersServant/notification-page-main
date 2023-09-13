const allUnread = document.getElementsByClassName('unread');
const markAllReadText = document.querySelector('#mark');
const unreadCount = document.querySelector('#new-notification-count');

function refreshUnreadNotificationCount() {
    unreadCount.textContent = allUnread.length;
}

markAllReadText.addEventListener('click', () => {
    const unreadNotifications = [...allUnread];
    for (let i = 0; i < unreadNotifications.length; i++) {
        const element = unreadNotifications[i];
        element.style.backgroundColor = 'hsl(0, 0%, 100%)';
        element.className = "notification read";
    }
    refreshUnreadNotificationCount();
})

