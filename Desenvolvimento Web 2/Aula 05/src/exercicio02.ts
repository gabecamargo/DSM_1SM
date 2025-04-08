import { createContext, useContext, useEffect, useState } from "react";

export default function App() {
    return (
        <UserProvider>
            <Form />
            <List />
        </UserProvider>
    );
}

interface ContextProps {
    users: User[];
    add: (user: User) => void;
}

interface User {
    name: string;
    age: string;
}

interface ChildrenProps {
    children: React.ReactNode;
}

const UserContext = createContext<ContextProps | null>(null);

function UserProvider({ children }: ChildrenProps) {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    function add(user: User) {
        const newUsers = [...users, user];
        setUsers(newUsers);

        localStorage.setItem("users", JSON.stringify(newUsers));
    }

    return (
        <UserContext.Provider value={{ users, add }}>
            {children}
        </UserContext.Provider>
    );
}

function useUserContext() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext deve ser usado dentro de um UserProvider");
    }
    return context;
}

function Form() {
    const { add } = useUserContext();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSave = () => {
        if (name && age) {
            add({ name, age });
            setName("");
            setAge("");
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="age">Idade</label>
                <input
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleSave}>Salvar</button>
            </div>
        </div>
    );
}

function List() {
    const { users } = useUserContext();

    return (
        <ol>
            {users.map((item, index) => (
                <li key={index}>
                    {item.name} - {item.age}
                </li>
            ))}
        </ol>
    );
}