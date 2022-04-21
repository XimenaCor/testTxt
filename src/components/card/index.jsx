import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card as AntdCard, Descriptions, Divider } from 'antd';
// import { setData } from './redux/actions/data';

const { Meta } = AntdCard;

const Card = ({ info }) => {
  const data = useSelector(state => state.data.data);

  return (
    <AntdCard
      hoverable
      style={{ width: 240, margin: '15px' }}
      cover={<img alt="example" src={info.avatar} />}
    >
      <Meta title={`${info.first_name} ${info.last_name}`} description={info.email} />
      <Divider />
      <Descriptions title="Subscription" column={1}>
        <Descriptions.Item label="Plan">{info.subscription.plan}</Descriptions.Item>
        <Descriptions.Item label="Status">{info.subscription.status}</Descriptions.Item>
        <Descriptions.Item label="Term">{info.subscription.term}</Descriptions.Item>
      </Descriptions>
    </AntdCard>
  )
}

export default Card;