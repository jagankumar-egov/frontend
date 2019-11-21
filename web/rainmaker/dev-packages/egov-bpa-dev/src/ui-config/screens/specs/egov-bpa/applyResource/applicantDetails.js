import {
    getBreak,
    getCommonCard,
    getCommonContainer,
    getCommonGrayCard,
    getCommonSubHeader,
    getCommonTitle,
    getSelectField,
    getTextField,
    getDateField,
    getPattern
} from "egov-ui-framework/ui-config/screens/specs/utils";
import { handleScreenConfigurationFieldChange as handleField } from "egov-ui-framework/ui-redux/screen-configuration/actions";
import { getDetailsForOwner } from "../../utils";
import get from "lodash/get";

const showComponent = (dispatch, componentJsonPath, display) => {
    let displayProps = display ? {} : { display: "none" };
    dispatch(
        handleField("apply", componentJsonPath, "props.style", displayProps)
    );
};

const commonApplicantInformation = () => {
    return getCommonGrayCard({
        header: getCommonSubHeader(
            {
                labelName: "Owner Information",
                labelKey: "Owner Information"
            },
            {
                style: {
                    marginBottom: 18
                }
            }
        ),
        applicantCard1: getCommonContainer({
            applicantName: getTextField({
                label: {
                    labelName: "Owner Name",
                    labelKey: "Owner Name"
                },
                placeholder: {
                    labelName: "Enter Owner Name",
                    labelKey: "Enter Owner Name"
                },
                required: true,
                // // pattern: getPattern("Name"),
                errorMessage: "Invalid Name",
                jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].name",
                // props: {
                //   style: {
                //     maxWidth: "400px"
                //   }
                // },
                gridDefination: {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
            }),
            applicantAddress: getTextField({
                label: {
                    labelName: "Owners Communication Address",
                    labelKey: "Owners Communication Address"
                },
                placeholder: {
                    labelName: "Enter Owner sCommunication Address",
                    labelKey: "Enter Owners Communication Address"
                },
                required: true,
                // // pattern: getPattern("Address"),
                errorMessage: "Invalid Address",
                jsonPath:
                    "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].correspondenceAddress",
                gridDefination: {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
            }),
            mobileNumber: getTextField({
                label: {
                    labelName: "Mobile Number",
                    labelKey: "Mobile Number"
                },
                placeholder: {
                    labelName: "Enter Mobile Number",
                    labelKey: "Mobile Number"
                },
                required: true,
                title: {
                    value: "Please search profile linked to the mobile no.",
                    key: "NOC_APPLICANT_MOBILE_NO_TOOLTIP_MESSAGE"
                },
                infoIcon: "info_circle",
                // // pattern: getPattern("MobileNo"),
                errorMessage: "ERR_DEFAULT_INPUT_FIELD_MSG",
                jsonPath:
                    "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].mobileNumber",
                iconObj: {
                    iconName: "search",
                    position: "end",
                    color: "#FE7A51",
                    onClickDefination: {
                        action: "condition",
                        callBack: (state, dispatch, fieldInfo) => {
                            getDetailsForOwner(state, dispatch, fieldInfo);
                        }
                    }
                },
                // props: {
                //   style: {
                //     maxWidth: "450px"
                //   }
                // },
                gridDefination: {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
            }),
            applicantEmail: getTextField({
                label: {
                    labelName: "eMail ID",
                    labelKey: "eMail ID"
                },
                placeholder: {
                    labelName: "Enter eMail ID",
                    labelKey: "eMail ID"
                },
                // // pattern: getPattern("Email"),
                errorMessage: "Invalid Email",
                jsonPath:
                    "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].emailId",
                gridDefination: {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
            }),
            genderRadioGroup: {
                uiFramework: "custom-containers",
                componentPath: "RadioGroupContainer",
                gridDefination: {
                    xs: 12,
                    sm: 12,
                    md: 6
                },
                jsonPath:
                    "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].gender",
                props: {
                    label: { name: "Gender", key: "NOC_GENDER_LABEL" },
                    buttons: [
                        {
                            labelName: "Male",
                            labelKey: "NOC_GENDER_MALE_RADIOBUTTON",
                            value: "MALE"
                        },
                        {
                            labelName: "FEMALE",
                            labelKey: "NOC_GENDER_FEMALE_RADIOBUTTON",
                            value: "FEMALE"
                        },
                        {
                            labelName: "Transgender",
                            labelKey: "NOC_GENDER_TRANSGENDER_RADIOBUTTON",
                            value: "TRANSGENDER"
                        }
                    ],
                    jsonPath:
                        "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].gender"
                    // required: true
                },
                type: "array"
            }
        })
    });
};

const institutionInformation = () => {
    return getCommonGrayCard({
        header: getCommonSubHeader(
            {
                labelName: "Applicant Information",
                labelKey: "NOC_APPLICANT_INFORMATION_SUBHEADER"
            },
            {
                style: {
                    marginBottom: 18
                }
            }
        ),
        applicantCard: getCommonContainer({
            institutionName: getTextField({
                label: {
                    labelName: "Name of Institution",
                    labelKey: "NOC_INSTITUTION_LABEL"
                },
                placeholder: {
                    labelName: "Enter Name of Institution",
                    labelKey: "NOC_ENTER_INSTITUTION_PLACEHOLDER"
                },
                // // pattern: getPattern("Name"),
                errorMessage: "Invalid Name",
                // required: true,
                jsonPath:
                    "FireNOCs[0].fireNOCDetails.applicantDetails.additionalDetail.institutionName",
                gridDefination: {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
            }),
            telephoneNumber: getTextField({
                label: {
                    labelName: "Official Telephone No.",
                    labelKey: "NOC_TELEPHONE_NUMBER_LABEL"
                },
                placeholder: {
                    labelName: "Enter Official Telephone No.",
                    labelKey: "NOC_ENTER_TELEPHONE_NUMBER_PLACEHOLDER"
                },
                // required: true,
                // pattern: getPattern("MobileNo"),
                errorMessage: "Invalid Number",
                jsonPath:
                    "FireNOCs[0].fireNOCDetails.applicantDetails.additionalDetail.telephoneNumber",
                gridDefination: {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
            }),
            authorisedPerson: getTextField({
                label: {
                    labelName: "Name of Authorized Person",
                    labelKey: "NOC_AUTHORIZED_PERSON_LABEL"
                },
                placeholder: {
                    labelName: "Enter Name of Authorized Person",
                    labelKey: "NOC_ENTER_AUTHORIZED_PERSON_PLACEHOLDER"
                },
                // required: true,
                // pattern: getPattern("Name"),
                errorMessage: "Invalid Name",
                jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].name",
                gridDefination: {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
            }),
            designation: getTextField({
                label: {
                    labelName: "Designation in Institution",
                    labelKey: "NOC_INSTITUTION_DESIGNATION_LABEL"
                },
                placeholder: {
                    labelName: "Enter designation of Institution",
                    labelKey: "NOC_ENTER_INSTITUTION_DESIGNATION_PLACEHOLDER"
                },
                // required: true,
                // pattern: getPattern("Name"),
                errorMessage: "Invalid Designation Name",
                jsonPath:
                    "FireNOCs[0].fireNOCDetails.applicantDetails.additionalDetail.institutionDesignation",
                gridDefination: {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
            }),
            authorizedPersonMobile: getTextField({
                label: {
                    labelName: "Mobile No. of Authorized Person",
                    labelKey: "NOC_AUTHORIZED_PERSON_MOBILE_LABEL"
                },
                placeholder: {
                    labelName: "Enter Mobile No. of Authorized Person",
                    labelKey: "NOC_AUTHORIZED_PERSON_MOBILE_PLACEHOLDER"
                },
                // required: true,
                // pattern: getPattern("MobileNo"),
                errorMessage: "Invalid MobileNo.",

                jsonPath:
                    "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].mobileNumber",
                gridDefination: {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
            }),
            authorizedPersonEmail: getTextField({
                label: {
                    labelName: "Email of Authorized Person",
                    labelKey: "NOC_AUTHORIZED_PERSON_EMAIL_LABEL"
                },
                placeholder: {
                    labelName: "Enter Email of Authorized Person",
                    labelKey: "NOC_AUTHORIZED_PERSON_EMAIL_PLACEHOLDER"
                },
                // pattern: getPattern("Email"),
                errorMessage: "Invalid Email",
                // required: true,
                jsonPath:
                    "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].emailId",
                gridDefination: {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
            }),
            officialCorrespondenceAddress: getTextField({
                label: {
                    labelName: "Official Correspondence Address",
                    labelKey: "NOC_OFFICIAL_CORRESPONDENCE_ADDRESS_LABEL"
                },
                placeholder: {
                    labelName: "Enter Official Correspondence Address ",
                    labelKey: "NOC_ENTER_OFFICIAL_CORRESPONDENCE_ADDRESS_PLACEHOLDER"
                },
                // required: true,
                // pattern: getPattern("Address"),
                errorMessage: "Invalid Address",
                jsonPath:
                    "FireNOCs[0].fireNOCDetails.applicantDetails.owners[0].correspondenceAddress",
                gridDefination: {
                    xs: 12,
                    sm: 12,
                    md: 6
                }
            })
        })
    });
};

export const applicantDetails = getCommonCard({
    header: getCommonTitle(
        {
            labelName: "Owner Details",
            labelKey: "Owner Details"
        },
        {
            style: {
                marginBottom: 18
            }
        }
    ),
    // break: getBreak(),
    applicantTypeContainer: getCommonContainer({
        applicantTypeSelection: getCommonContainer({
            applicantType: {
                ...getSelectField({
                    label: {
                        labelName: "Owner Type",
                        labelKey: "Owner Type"
                    },
                    placeholder: {
                        labelName: "Select Owner Type",
                        labelKey: "Owner Type"
                    },
                    jsonPath:
                        "FireNOCs[0].fireNOCDetails.applicantDetails.ownerShipMajorType",
                    localePrefix: {
                        moduleName: "common-masters",
                        masterName: "OwnerShipCategory"
                    },
                    // data: [
                    //   {
                    //     code: "Individual"
                    //   },
                    //   {
                    //     code: "Multiple"
                    //   },
                    //   {
                    //     code: "Institutional-Private"
                    //   }
                    // ],
                    // required: true,
                    sourceJsonPath: "applyScreenMdmsData.DropdownsData.OwnershipCategory",
                    gridDefination: {
                        xs: 12,
                        sm: 12,
                        md: 6
                    }
                }),
                beforeFieldChange: (action, state, dispatch) => {
                    let path = action.componentJsonpath.replace(
                        /.applicantType$/,
                        ".applicantSubType"
                    );
                    let applicantType = get(
                        state,
                        "screenConfiguration.preparedFinalObject.applyScreenMdmsData.common-masters.OwnerShipCategory",
                        []
                    );
                    let applicantSubType = applicantType.filter(item => {
                        return item.active && item.code.startsWith(action.value);
                    });
                    dispatch(handleField("apply", path, "props.data", applicantSubType));
                }
            },
            applicantSubType: {
                ...getSelectField({
                    label: {
                        labelName: "Type of Owner - Subtype",
                        labelKey: "Type of Owner - Subtype"
                    },
                    placeholder: {
                        labelName: "Select Owner - Subtype",
                        labelKey: "Select Owner - Subtype"
                    },
                    jsonPath: "FireNOCs[0].fireNOCDetails.applicantDetails.ownerShipType",
                    localePrefix: {
                        moduleName: "common-masters",
                        masterName: "OwnerShipCategory"
                    },
                    // data: [
                    //   {
                    //     code: "Private Company"
                    //   }
                    // ],
                    // props: {
                    //   style: {
                    //     display: "none"
                    //   }
                    // },
                    // required: true,
                    gridDefination: {
                        xs: 12,
                        sm: 12,
                        md: 6
                    }
                }),
                beforeFieldChange: (action, state, dispatch) => {
                    let singleApplicantContainerJsonPath =
                        "components.div.children.formwizardThirdStep.children.applicantDetails.children.cardContent.children.applicantTypeContainer.children.singleApplicantContainer";
                    let multipleApplicantContainerJsonPath =
                        "components.div.children.formwizardThirdStep.children.applicantDetails.children.cardContent.children.applicantTypeContainer.children.multipleApplicantContainer";
                    let institutionContainerJsonPath =
                        "components.div.children.formwizardThirdStep.children.applicantDetails.children.cardContent.children.applicantTypeContainer.children.institutionContainer";
                    let applicantSubtypeJsonPath =
                        "components.div.children.formwizardThirdStep.children.applicantDetails.children.cardContent.children.applicantTypeContainer.children.applicantSubType";
                    if (action.value.includes("SINGLEOWNER")) {
                        showComponent(dispatch, singleApplicantContainerJsonPath, true);
                        showComponent(dispatch, multipleApplicantContainerJsonPath, false);
                        showComponent(dispatch, institutionContainerJsonPath, false);
                        // showComponent(dispatch, applicantSubtypeJsonPath, false);
                    } else if (action.value.includes("MULTIPLEOWNERS")) {
                        showComponent(dispatch, singleApplicantContainerJsonPath, false);
                        showComponent(dispatch, multipleApplicantContainerJsonPath, true);
                        showComponent(dispatch, institutionContainerJsonPath, false);
                        // showComponent(dispatch, applicantSubtypeJsonPath, false);
                    } else if (action.value.includes("INSTITUTIONAL")) {
                        showComponent(dispatch, singleApplicantContainerJsonPath, false);
                        showComponent(dispatch, multipleApplicantContainerJsonPath, false);
                        showComponent(dispatch, institutionContainerJsonPath, true);
                        // showComponent(dispatch, applicantSubtypeJsonPath, true);
                    }
                }
            }
        }),
        singleApplicantContainer: {
            uiFramework: "custom-atoms",
            componentPath: "Div",
            children: {
                individualApplicantInfo: commonApplicantInformation()
            }
        },
        multipleApplicantContainer: {
            uiFramework: "custom-atoms",
            componentPath: "Div",
            props: {
                style: {
                    display: "none"
                }
            },
            children: {
                multipleApplicantInfo: {
                    uiFramework: "custom-containers",
                    componentPath: "MultiItem",
                    props: {
                        scheama: commonApplicantInformation(),
                        items: [],
                        addItemLabel: {
                            labelName: "Add Applicant",
                            labelKey: "NOC_ADD_APPLICANT_LABEL"
                        },
                        sourceJsonPath:
                            "FireNOCs[0].fireNOCDetails.applicantDetails.owners",
                        prefixSourceJsonPath:
                            "children.cardContent.children.applicantCard.children"
                    },
                    type: "array"
                }
            }
        },
        institutionContainer: {
            uiFramework: "custom-atoms",
            componentPath: "Div",
            props: {
                style: {
                    display: "none"
                }
            },
            children: {
                institutionInfo: institutionInformation()
            }
        }
    })
});
