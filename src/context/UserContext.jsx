import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  profilepicture:
    "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState(user);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://panorbit.in/api/users.json");
        const data = await response.json();

        setUsers(data.users);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const fetchSingleUser = async (id) => {
    const user = users.find((user) => user.id == id);
    setUserDetails(user);
  };
  return (
    <UserContext.Provider
      value={{ users, userDetails, fetchSingleUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => useContext(UserContext);

export default UserProvider;
