import React from 'react';

const AdminDashboard: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Admin Dashboard</h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px' }}>
                    <h2>Users</h2>
                    <p>Manage users here</p>
                </div>
                <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px' }}>
                    <h2>Settings</h2>
                    <p>Manage settings here</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;