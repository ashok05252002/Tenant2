export const mockNotificationTemplates = [
    {
        id: 1,
        name: 'Welcome Email',
        type: 'Email',
        trigger: 'New User Registration',
        subject: 'Welcome to Al Dahab Investments!',
        body: 'Hi {{userName}}, welcome to our platform! We are excited to have you on board. You can start browsing properties right away.'
    },
    {
        id: 2,
        name: 'Application Received',
        type: 'Email',
        trigger: 'Application Submission',
        subject: 'Your Application for {{propertyName}} has been received',
        body: 'Hi {{userName}}, we have received your application for {{propertyName}}. We will review it and get back to you shortly. Your application ID is {{applicationId}}.'
    },
    {
        id: 3,
        name: 'OTP Verification',
        type: 'SMS',
        trigger: 'Login/Registration',
        subject: 'Your Verification Code',
        body: 'Your verification code is {{otpCode}}. It is valid for 10 minutes.'
    },
    {
        id: 4,
        name: 'Rent Reminder',
        type: 'In-App',
        trigger: '5 Days Before Rent Due',
        subject: 'Upcoming Rent Payment',
        body: 'Just a friendly reminder that your rent for {{propertyName}} is due on {{dueDate}}.'
    }
];

export const mockNotificationLogs = [
    {
        id: 1,
        type: 'Email',
        recipient: 'khalfan.tenant@example.com',
        subject: 'Welcome to Al Dahab Investments!',
        status: 'Sent',
        timestamp: '2025-08-20 10:35 AM'
    },
    {
        id: 2,
        type: 'SMS',
        recipient: '+96898765432',
        subject: 'Your Verification Code',
        status: 'Sent',
        timestamp: '2025-08-20 10:32 AM'
    },
    {
        id: 3,
        type: 'Email',
        recipient: 'failed.email@example.com',
        subject: 'Application Received',
        status: 'Failed',
        timestamp: '2025-08-19 05:00 PM'
    },
];
