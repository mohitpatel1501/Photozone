import React from 'react';

export default function Copyright() {
  return (
    <div>
       <div className="container-fluid bg-dark text-white border-top border-secondary px-0">
        <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="py-4 px-5 text-center text-md-start">
                <p className="mb-0">&copy; <a className="text-primary" href="#">Your Site Name</a>. All Rights Reserved.</p>
            </div>
            <div className="py-4 px-5 bg-secondary footer-shape position-relative text-center text-md-end">
                <p className="mb-0">Designed by <a className="text-primary fw-bold" href="https://htmlcodex.com">HTML Codex</a></p>  Distributed by <a href="https://themewagon.com" target="_blank" >ThemeWagon</a>
            </div>
        </div>
    </div>
    </div>
  );
}
