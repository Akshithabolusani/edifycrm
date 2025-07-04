// import React from 'react';
// import '../styles/CampaignsTable.css';
// import { List, Layout, Filter, Download } from 'lucide-react';

// const CampaignsTable = () => {
//   return (
//     <div className="campaigns-table-wrapper">
//       {/* Filter and Action Controls */}
      

//         <div className="status-filters">
//           {['Upcoming', 'Ongoing', 'On Hold', 'Completed'].map((status, index) => (
//             <button key={index} className="status-pill">
//               {status} <span className="badge">3</span>
//             </button>
//           ))}
//         </div>

//         <div className="view-export-controls">
//           <button className="view-btn active">
//             <List size={16} style={{ marginRight: '6px' }} /> In Table
//           </button>
//           <button className="view-btn">
//             <Layout size={16} style={{ marginRight: '6px' }} /> Kanban
//           </button>
//           <button className="ghost-btn">
//             <Filter size={16} style={{ marginRight: '6px' }} /> Edit Columns
//           </button>
//           <button className="ghost-btn">
//             <Download size={16} style={{ marginRight: '6px' }} /> Export
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <table className="campaigns-table">
//         <thead>
//           <tr>
//             <th><input type="checkbox" /></th>
//             <th>Campaign Name</th>
//             <th>Type</th>
//             <th>Status</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.from({ length: 10 }).map((_, index) => (
//             <tr key={index}>
//               <td><input type="checkbox" /></td>
//               <td>HRMS LAUNCH</td>
//               <td>{index % 2 === 0 ? 'Webinar' : 'Email'}</td>
//               <td>Planned</td>
//               <td>18-08-2024</td>
//               <td>18-08-2024</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="pagination-bar">
//         <span>Rows per page: <strong>10</strong></span>
//         <span>1–10 of 276</span>
//         <span className="page-arrows">{'<'}</span>
//         <span className="page-arrows">{'>'}</span>
//       </div>
//     </div>
//   );
// };

// export default CampaignsTable;

// import React from 'react';
// import '../styles/CampaignsTable.css';
// import { List, Layout, Filter, Download, Search } from 'lucide-react';

// const CampaignsTable = () => {
//   return (
//     <div className="campaigns-table-wrapper">
//       {/* Filter and Action Controls */}
//       <div className="campaigns-controls">
//         <div className="left-controls" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
//          {/* Search Bar - Side by side with Status Filters */}
//           <div className="search-input-wrapper">
//             <Search size={16} className="search-icon" />
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search"
//             />
//           </div>
         
//           {/* Status Filters */}
//           <div className="status-filters">
//             {['Upcoming', 'Ongoing', 'On Hold', 'Completed'].map((status, index) => (
//               <button key={index} className="status-pill">
//                 <span className="pill-text">{status}</span>
//                 <span className="pill-badge">3</span>
//               </button>
//             ))}
//           </div>

          
//         </div>

//         <div className="view-export-controls">
//           <button className="view-btn active">
//             <List size={16} style={{ marginRight: '6px' }} /> In Table
//           </button>
//           <button className="view-btn">
//             <Layout size={16} style={{ marginRight: '6px' }} /> Kanban
//           </button>
//           <button className="ghost-btn">
//             <Filter size={16} style={{ marginRight: '6px' }} /> Edit Columns
//           </button>
//           <button className="ghost-btn">
//             <Download size={16} style={{ marginRight: '6px' }} /> Export
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <table className="campaigns-table">
//         <thead>
//           <tr>
//             <th><input type="checkbox" /></th>
//             <th>Campaign Name</th>
//             <th>Type</th>
//             <th>Status</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.from({ length: 10 }).map((_, index) => (
//             <tr key={index}>
//               <td><input type="checkbox" /></td>
//               <td>HRMS LAUNCH</td>
//               <td>{index % 2 === 0 ? 'Webinar' : 'Email'}</td>
//               <td>Planned</td>
//               <td>18-08-2024</td>
//               <td>18-08-2024</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="pagination-bar">
//         <span>Rows per page: <strong>10</strong></span>
//         <span>1–10 of 276</span>
//         <span className="page-arrows">{'<'}</span>
//         <span className="page-arrows">{'>'}</span>
//       </div>
//     </div>
//   );
// };

// export default CampaignsTable;

// import React from 'react';
// import '../styles/CampaignsTable.css';
// import { List, Layout, Filter, Download, Search } from 'lucide-react';

// const CampaignsTable = ({ campaigns }) => {
//   return (
//     <div className="campaigns-table-wrapper">
//       {/* Filter and Action Controls */}
//       <div className="campaigns-controls">
//         <div className="left-controls" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
//           {/* Search Bar - Side by side with Status Filters */}
//           <div className="search-input-wrapper">
//             <Search size={16} className="search-icon" />
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search"
//             />
//           </div>

//           {/* Status Filters */}
//           <div className="status-filters">
//             {['Upcoming', 'Ongoing', 'On Hold', 'Completed'].map((status, index) => (
//               <button key={index} className="status-pill">
//                 <span className="pill-text">{status}</span>
//                 <span className="pill-badge">3</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="view-export-controls">
//           <button className="view-btn active">
//             <List size={16} style={{ marginRight: '6px' }} /> In Table
//           </button>
//           <button className="view-btn">
//             <Layout size={16} style={{ marginRight: '6px' }} /> Kanban
//           </button>
//           <button className="ghost-btn">
//             <Filter size={16} style={{ marginRight: '6px' }} /> Edit Columns
//           </button>
//           <button className="ghost-btn">
//             <Download size={16} style={{ marginRight: '6px' }} /> Export
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <table className="campaigns-table">
//         <thead>
//           <tr>
//             <th><input type="checkbox" /></th>
//             <th>Campaign Name</th>
//             <th>Type</th>
//             <th>Status</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {campaigns && campaigns.length > 0 ? (
//             campaigns.map((campaign, index) => (
//               <tr key={index}>
//                 <td><input type="checkbox" /></td>
//                 <td>{campaign.name}</td>
//                 <td>{campaign.type}</td>
//                 <td>{campaign.status}</td>
//                 <td>{campaign.startDate}</td>
//                 <td>{campaign.endDate}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" style={{ textAlign: 'center', padding: '12px' }}>No campaigns found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="pagination-bar">
//         <span>Rows per page: <strong>10</strong></span>
//         <span>1–10 of {campaigns.length || 0}</span>
//         <span className="page-arrows">{'<'}</span>
//         <span className="page-arrows">{'>'}</span>
//       </div>
//     </div>
//   );
// };

// export default CampaignsTable;






// import React from 'react';
// import '../styles/CampaignsTable.css';
// import { List, Layout, Filter, Download, Search } from 'lucide-react';

// const CampaignsTable = ({ campaigns, viewMode, setViewMode }) => {
//   return (
//     <div className="campaigns-table-wrapper">
//       {/* Filter and Action Controls */}
//       <div className="campaigns-controls">
//         <div className="left-controls" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
//           {/* Search Bar */}
//           <div className="search-input-wrapper">
//             <Search size={16} className="search-icon" />
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search"
//             />
//           </div>

//           {/* Status Filters */}
//           <div className="status-filters">
//             {['Upcoming', 'Ongoing', 'On Hold', 'Completed'].map((status, index) => (
//               <button key={index} className="status-pill">
//                 <span className="pill-text">{status}</span>
//                 <span className="pill-badge">3</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="view-export-controls">
//           <button
//             className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
//             onClick={() => setViewMode('table')}
//           >
//             <List size={16} style={{ marginRight: '6px' }} /> In Table
//           </button>
//           <button
//             className={`view-btn ${viewMode === 'kanban' ? 'active' : ''}`}
//             onClick={() => setViewMode('kanban')}
//           >
//             <Layout size={16} style={{ marginRight: '6px' }} /> Kanban
//           </button>
//           <button className="ghost-btn">
//             <Filter size={16} style={{ marginRight: '6px' }} /> Edit Columns
//           </button>
//           <button className="ghost-btn">
//             <Download size={16} style={{ marginRight: '6px' }} /> Export
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <table className="campaigns-table">
//         <thead>
//           <tr>
//             <th><input type="checkbox" /></th>
//             <th>Campaign Name</th>
//             <th>Type</th>
//             <th>Status</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {campaigns && campaigns.length > 0 ? (
//             campaigns.map((campaign, index) => (
//               <tr key={index}>
//                 <td><input type="checkbox" /></td>
//                 <td>{campaign.name}</td>
//                 <td>{campaign.type}</td>
//                 <td>{campaign.status}</td>
//                 <td>{campaign.startDate}</td>
//                 <td>{campaign.endDate}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" style={{ textAlign: 'center', padding: '12px' }}>No campaigns found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="pagination-bar">
//         <span>Rows per page: <strong>10</strong></span>
//         <span>1–10 of {campaigns.length || 0}</span>
//         <span className="page-arrows">{'<'}</span>
//         <span className="page-arrows">{'>'}</span>
//       </div>
//     </div>
//   );
// };

// export default CampaignsTable;








import React from 'react';
import '../styles/CampaignsTable.css';
import { List, Layout, Filter, Download, Search } from 'lucide-react';

const CampaignsTable = ({ campaigns, viewMode, setViewMode }) => {
  return (
    <div className="campaigns-table-wrapper">
      {/* Filter and Action Controls */}
      <div className="campaigns-controls">
        <div className="left-controls" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {/* Search Bar */}
          <div className="search-input-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search"
            />
          </div>

          {/* Status Filters */}
          <div className="status-filters">
            {['Upcoming', 'Ongoing', 'On Hold', 'Completed'].map((status, index) => (
              <button key={index} className="status-pill" type="button">
                <span className="pill-text">{status}</span>
                <span className="pill-badge">3</span>
              </button>
            ))}
          </div>
        </div>

        <div className="view-export-controls">
          <button
            type="button"
            className={`view-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
          >
            <List size={16} style={{ marginRight: '6px' }} /> In Table
          </button>
          <button
            type="button"
            className={`view-btn ${viewMode === 'kanban' ? 'active' : ''}`}
            onClick={() => setViewMode('kanban')}
          >
            <Layout size={16} style={{ marginRight: '6px' }} /> Kanban
          </button>
          <button className="ghost-btn" type="button">
            <Filter size={16} style={{ marginRight: '6px' }} /> Edit Columns
          </button>
          <button className="ghost-btn" type="button">
            <Download size={16} style={{ marginRight: '6px' }} /> Export
          </button>
        </div>
      </div>

      {/* Table */}
      {viewMode === 'table' && (
        <>
          <table className="campaigns-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Campaign Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            <tbody>
              {campaigns && campaigns.length > 0 ? (
                campaigns.map((campaign, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td>{campaign.name}</td>
                    <td>{campaign.type}</td>
                    <td>{campaign.status}</td>
                    <td>{campaign.startDate}</td>
                    <td>{campaign.endDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '12px' }}>No campaigns found.</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="pagination-bar">
            <span>Rows per page: <strong>10</strong></span>
            <span>1–10 of {campaigns.length || 0}</span>
            <span className="page-arrows">{'<'}</span>
            <span className="page-arrows">{'>'}</span>
          </div>
        </>
      )}

      {/* Kanban View */}
      {viewMode === 'kanban' && (
        <div style={{ padding: '16px' }}>
          {/* You can replace this with your real KanbanView component if you want */}
          <h3>Kanban View Coming Soon</h3>
        </div>
      )}
    </div>
  );
};

export default CampaignsTable;
