import React from 'react';
import Axios from "axios";
import { Button, Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from './redux/actions/data';
import LoadData from './components/loadData';
import './App.css';

const { Header, Footer, Content } = Layout;

function App() {
  const dispatch = useDispatch();
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    if (list.length === 0) {
      fetchData();
    }
  });

  React.useEffect(() => {
    if (list.length > 0) {
      dispatch(setData(list))
    }
  }, [list])

  const fetchData = async () => {
    try {
      const response = await Axios({
        url: "https://random-data-api.com/api/users/random_user?size=10",
      });

      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Layout>
      <Header>Header</Header>
      <Content style={{ margin: '24px 16px 0' }}>
      <div>
        <span style={{ paddingRight: '10px' }}>Want to load new users?</span>
        <Button type="primary" onClick={fetchData}>Click Here</Button>
      </div>
      <LoadData />
      </Content>
      <Footer>Ximena Cordero, (+591)76708924</Footer>
    </Layout>
    </div>
  );
}

export default App;
