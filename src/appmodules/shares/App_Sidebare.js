import React from 'react';


function App_Sidebare()
{
    return(
      
    <div class="d-flex">
        
        <nav class="bg-light border-end" id="sidebar">
            <div class="p-3">
                <h4>My Sidebar</h4>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                            <li><a class="dropdown-item" href="#">Web Design</a></li>
                            <li><a class="dropdown-item" href="#">App Development</a></li>
                            <li><a class="dropdown-item" href="#">SEO</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

        
        <div class="p-4" id="content">
            <h1>Welcome to My Website!</h1>
            <p>This is the main content area. The sidebar is on the left.</p>
        </div>
    </div>

    
    )
}

export default App_Sidebare