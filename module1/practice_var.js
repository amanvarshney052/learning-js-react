// USER ACCESS SYSTEM
//Calculate:
// canLogin
// isAdmin
// canAccessDashboard
// canAccessAdminPanel

const user = {
    name: "Aman",
    age: 21,
    isVerified: true,
    isActive: true,
    role: "USER"
};

const canlogin=user.isActive && user.isVerified;
const isAdmin=user.role=="ADMIN";
const canAccessDashboard=canlogin ===true;
const canAccessAdminPanel=canlogin && isAdmin;
console.log(`Can Login: ${canlogin}`);
console.log(`Is Admin: ${isAdmin}`);
console.log(`Can Access Dashboard: ${canAccessDashboard}`);
console.log(`Can Access Admin Panel: ${canAccessAdminPanel}`);  