import React from "react";

type User = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
};

function ObjectComponent() {
  const [user, setUser] = React.useState<User>({
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
    },
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.value;
    if (e.target.value === "") {
        name = "suratin";
    }
    setUser({
      ...user,
      name: name,
    });
  };

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
 
    setUser({
      ...user,
      address: {
        ...user.address,
        city: e.target.value,
      }
    });
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <input type="text" onChange={(e) => handleName(e)} />
      <br />
      <input style={{marginTop: "10px"}} type="text" onChange={(e) => handleAddress(e)} />
      <h1>name: {user.name}</h1>
      <h2>age: {user.age}</h2>
      <h3>address Street: {user.address.street}</h3>
      <h4>address City:{user.address.city}</h4>
    </div>
  );
}

export default ObjectComponent;
