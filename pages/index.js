import Head from 'next/head';
import Container from '../components/container';
import fetch from 'isomorphic-fetch';
require ('es6-promise').polyfill();
import Users from '../components/Users';

let Index = (props) => {
  return (
    <Container>
        <Head>
            <title>Home</title>
        </Head>
        <h1>Next</h1>
        <Users users={props.users}/>
    </Container>
  );
}


Index.getInitialProps = async(ctx) => {
    const res = await fetch(`https://reqres.in/api/users`);
    const data = await res.json();
    // console.log(data);
    return {users:data};
}



export default Index;