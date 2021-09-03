import Content from 'src/components/Content/Content'
import Sidebar from 'src/components/Sidebar/Sidebar'
import Topbar from 'src/components/Topbar/Topbar'

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-5">
        <Topbar />
        <Content>{children}</Content>
      </div>
    </div>
  )
}

export default DashboardLayout
