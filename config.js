/* ============================================================
   EWO dashboard settings, Microsoft sign-in edition
   Epyllion Group tenant, Files.SelectedOperations.Selected

   This file is YOURS. Dashboard updates replace index.html but never
   this file, so anything you set here survives every update.
   ============================================================ */
window.EWO_CONFIG = {

  /* Azure portal > App registrations > "Dashboard" > Overview >
     Application (client) ID. Required. */
  CLIENT_ID: "4e8f9920-a497-4a73-ad56-f08e85d659e0",

  /* Epyllion Group's Directory (tenant) ID. Only Epyllion accounts can sign in. */
  TENANT_ID: "09438fa4-a67e-4666-a9c2-fcc1c2252472",

  /* Must match a Redirect URI on the app registration EXACTLY. */
  REDIRECT_URI: "https://johirul-islam-bd.github.io/elclockplan/index.html",

  /* What the app asks for, as agreed with the admin. With
     Files.SelectedOperations.Selected the app can only reach the files
     (or folder) that were explicitly granted to it. */
  GRAPH_SCOPES: ["User.Read", "Files.SelectedOperations.Selected"],

  /* Whose OneDrive holds the files. */
  ONEDRIVE_OWNER: "bp1@epylliongroup.com",

  /* Where the two workbooks are, as paths from the OneDrive root. With these
     set, each file is fetched directly and the folder is never listed, which
     is what per-file grants allow. Keep the names exactly as in OneDrive. */
  EWO_FILE_PATH: "BUSINESS PLAN _ 01/ELC_Lock/ELC_LOCK_PLAN.xlsx",
  DELIVERY_FILE_PATH: "BUSINESS PLAN _ 01/ELC_Lock/FABRIC_DELIVERY.xlsx",

  /* Used only when EWO_FILE_PATH is empty: the folder is listed and files are
     picked by name. Needs a grant on the FOLDER (or Files.Read.All). */
  ONEDRIVE_FOLDER_PATH: "BUSINESS PLAN _ 01/ELC_Lock",
  EWO_FILE_PATTERN: "ELC_*LOCK_*PLAN",
  DELIVERY_FILE_PATTERN: "FABRIC_*DELIVERY",

  /* Not used in this setup. */
  ONEDRIVE_SHARE_URL: "",

  /* How often, in seconds, an open page checks whether the files changed. */
  POLL_SECONDS: 300
};
