const Initialicon = ({ initials }) => {
    return (
      <view
        style={{
          backgroundcolor: 'blue',
          alignitems: 'center',
          justifycontent: 'center',
          borderradius: 30,
          width: 50,
          height: 50,
        }}>
        <text style={{ color: 'white', fontsize: 25 }}>{initials}</text>
      </view>
    );
  };
  export default Initialicon;