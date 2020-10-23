
export interface ModificationNote {
    modified_on: Date;
    modified_by: String;
    modification_note: String;
}


export const ModificationNote = {
    modified_on: Date,
    modified_by: String,
    modification_note: String
}


export enum response_status_codes {
    success = 200,
    bad_request = 400,
    internal_server_error = 500,
    not_found = 404,
    created = 201,
    no_content = 204,
    modified = 304,
    unautorized = 401,
    forbidden = 403,
    not_implement=501
   
}