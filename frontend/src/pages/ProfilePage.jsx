import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileInfoCard } from '../components/profile/ProfileInfoCard';
import { AccountSettingsCard } from '../components/profile/AccountSettingsCard';
import { EditProfileModal } from '../components/profile/EditProfileModal';
import { ChangePasswordModal } from '../components/profile/ChangePasswordModal';

export const ProfilePage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: 'Rohit Patil',
    role: 'Farmer',
    email: 'rohit@example.com',
    phone: '+91 98765 43210',
    location: 'Maharashtra, India',
    avatar: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=300&auto=format&fit=crop&q=80',
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const handleSaveProfile = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
  };

  const handleLogout = () => {
    localStorage.removeItem('agrow_jwt_token');
    navigate('/login');
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Profile & Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Manage your account and preferences.
        </p>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <ProfileInfoCard
          user={user}
          onEditProfile={() => setIsEditModalOpen(true)}
        />

        <AccountSettingsCard
          onChangePassword={() => setIsPasswordModalOpen(true)}
          onNotificationToggle={() => alert('Notification settings updated.')}
          onLogout={handleLogout}
        />
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={user}
        onSave={handleSaveProfile}
      />

      {/* Change Password Modal */}
      <ChangePasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </div>
  );
};