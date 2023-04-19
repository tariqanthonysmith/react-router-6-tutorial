

const Dashboard = ({user}) => {
  return (
    <section className='section'>
      <h4>Hello {user ? user.email : "Anonymous User!"}</h4>
    </section>
  );
};
export default Dashboard;
