import Layout from '../common/Layout'
import Container from 'react-bootstrap/Container';
import Sidebar from '../common/Sidebar';

export default function AdminLayout({title, children}) {
  return (
    <Layout>
        <section className="product-details py-5 min-vh-100" >
            <Container>
                <h2>{title}</h2>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>

                    <div className="col-md-9">
                        {children}
                    </div>
                </div>
            </Container>
        </section>
    </Layout>
  )
}
