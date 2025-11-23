import type { User } from "../types/user"

interface UserCardProps {
    user: User;
}

export function UserCard({ user }: UserCardProps) {
    return (
        <div className="bg-(--bg-2)">
            <div>
                <h1>Nome: {user.nmUsuario}</h1>
            </div>
            <div>

            </div>
        </div>
    )
}