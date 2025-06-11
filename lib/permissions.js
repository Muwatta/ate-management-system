export const permissions = {
  admin: ['create_user', 'assign_role', 'view_all'],
  teacher: ['view_class', 'mark_attendance'],
  student: ['view_subjects'],
  parent: ['view_ward'],
  hod: ['manage_department'],
  hr: ['create_user', 'assign_role', 'reset_password'],
  non_academic_staff: [],
};

export function can(role, action) {
  return permissions[role]?.includes(action);
}