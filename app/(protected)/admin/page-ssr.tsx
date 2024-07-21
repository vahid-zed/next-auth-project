import { currentRole } from "@/lib/auth";

const AdminPage = async () => {
    const role = await currentRole();

    return (
        <div>
            Current Role: {role}
        </div>
    )
}

export default AdminPage;