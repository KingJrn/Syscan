<template>
    <div class="content-body">
        <!-- row -->
        <div class="container-fluid">
            <div class="mt-4">
                <!-- Settings Tabs -->
                <ul class="nav nav-tabs" id="settingsTabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="emailSettings-tab" data-bs-toggle="tab" href="#emailSettings"
                            role="tab" aria-controls="emailSettings" aria-selected="true">Email Settings</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="accessControl-tab" data-bs-toggle="tab" href="#accessControl" role="tab"
                            aria-controls="accessControl" aria-selected="false">Access Control</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="adminCredentials-tab" data-bs-toggle="tab" href="#adminCredentials"
                            role="tab" aria-controls="adminCredentials" aria-selected="false">Admin Credentials</a>
                    </li>
                </ul>

                <!-- Settings Content -->
                <div class="tab-content mt-4" id="settingsTabContent">
                    <!-- Email Settings -->
                    <div class="tab-pane fade show active" id="emailSettings" role="tabpanel"
                        aria-labelledby="emailSettings-tab">
                        <h4>Email Settings</h4>
                        <p>Configure your email settings here.</p>
                        <!-- Example: Email settings form -->
                        <form>
                            <div class="mb-3">
                                <label for="emailHost" class="form-label">Email Host</label>
                                <input type="text" class="form-control" id="emailHost" placeholder="Enter email host">
                            </div>
                            <div class="mb-3">
                                <label for="emailPort" class="form-label">Email Port</label>
                                <input type="text" class="form-control" id="emailPort" placeholder="Enter email port">
                            </div>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </form>
                    </div>

                    <!-- Access Control -->
                    <div class="tab-pane fade" id="accessControl" role="tabpanel" aria-labelledby="accessControl-tab">
                        <div class=" mt-4">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs" id="accessControlTabs" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="userPermissions-tab" data-bs-toggle="tab"
                                        href="#userPermissions" role="tab" aria-controls="userPermissions"
                                        aria-selected="true">User Permissions</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="accessSettings-tab" data-bs-toggle="tab"
                                        href="#accessSettings" role="tab" aria-controls="accessSettings"
                                        aria-selected="false">Access Settings</a>
                                </li>
                            </ul>
                            <!-- Tab panes -->
                            <div class="tab-content mt-3" id="accessControlTabContent">
                                <!-- User Permissions -->
                                <div class="tab-pane fade show active" id="userPermissions" role="tabpanel"
                                    aria-labelledby="userPermissions-tab">
                                    <!-- User permissions content -->
                                    <h4 class="mb-3">User Permissions</h4>
                                    <p>Manage user access and permissions here.</p>
                                    <!-- Add your user permissions settings here -->
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            User permissions settings go here
                                        </div>
                                    </div>
                                </div>
                                <!-- Access Settings -->
                                <div class="tab-pane fade" id="accessSettings" role="tabpanel"
                                    aria-labelledby="accessSettings-tab">
                                    <!-- Access settings content -->
                                    <h4 class="mb-3">Access Settings</h4>
                                    <p>Add your access control settings here.</p>
                                    <!-- Add your access control settings here -->
                                    <div class="card mb-3">
                                        <div class="card-body">
                                            Access control settings go here
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Admin Credentials -->
                    <div class="tab-pane fade" id="adminCredentials" role="tabpanel"
                        aria-labelledby="adminCredentials-tab">
                        <h4>Admin Credentials</h4>
                        <p>Update your admin username and password here.</p>
                        <!-- Example: Admin credentials form -->
                        <form>
                            <div class="mb-3">
                                <label for="adminUsername" class="form-label">Username</label>
                                <input type="text" class="form-control" id="adminUsername"
                                    placeholder="Enter new username">
                            </div>
                            <div class="mb-3">
                                <label for="adminPassword" class="form-label">Password</label>
                                <input type="password" class="form-control" id="adminPassword"
                                    placeholder="Enter new password">
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>