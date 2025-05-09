import { useState } from 'react';
import { BiCheck, BiTrash, BiTrashAlt } from 'react-icons/bi';
import { FiFile } from 'react-icons/fi';
import { IoArrowBackOutline, IoCloseOutline } from 'react-icons/io5';
import Cookies from 'js-cookie';
import Alert from '../alert/Alert';

export default function CertificateApplication({ setCertificationApplication }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;
  const [fileUploadLoader, setFileUploadLoader] = useState(false)
  const token = Cookies.get('token')
  const [msg, setMsg] = useState('')
  const [alertType, setAlertType] = useState('')
  
  const [formData, setFormData] = useState({
    // Product Details
    product_name: '',
    product_category: 'Agro',
    
    // Processing Information
    source_location: '',
    primary_materials_used: '',
    do_you_own_or_lease: '',
    stage_of_value_addition_conducted_locally: '',
    final_product_value: null,
    annual_output: '',
    annual_volume_of_raw_material_utilized: '',
    process_flow_diagram: null,

    // Local Value Added Metrics
    pct_of_material_processed_locally: null,
    pct_of_material_imported: null,
    annual_spend_on_imported_raw_materials: null,
    annual_spend_on_locally_sourced_materials: null,
    pct_of_components_sourced_locally: null,
    pct_of_components_imported: null,
    total_work_force: null,
    pct_of_local_workforce: null,
    use_of_local_suppliers: '',
    list_major_local_suppliers: '',
    final_product_cost: null,
    raw_material_cost: null,
    annual_expenditure_on_local_procurement: null,
    calculated_value_addition: null,
    investment_in_local_training_or_infrastructure: '',
    
    // Environmental Impact
    annual_water_consumption_estimate: '',
    annual_energy_consumption_estimate: '',
    green_technology_or_practices_used: '',
    compliance_with_national_international_standards: '',
    waste_management_practices: '',
    environmental_impact_assessment_report: null,
    emissions_and_pollution_data: null,
    
    // Social Contribution
    do_you_run_or_fund_community_development_project: '',
    community_development_project_description: '',
    estimated_annual_tax_paid_to_host_country: null,
    employee_welfare_program: '',
    occupational_health_and_safety_policies: null,
    grievance_mechanism_description: '',
    grievance_mechanism_details: '',
    
    // Product Documents
    certificate_of_company_registration: null,
    environmental_impact_assessment: null,
    operational_process_flowchart: null,
    corporate_social_responsibility_report: null,
    any_industry_certifications: null,
    photo_of_production_site_facilities_or_warehouses: null,
    
    // Supplier Invoices
    invoices: [],
    
    // Declaration
    knowledge_of_information: false,
    agree_to_allow_valcerta: false,
    commit_to_maintaining_compliance: false,
    authorized_signatory_name: '',
    designation_title: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  
  const handleCheckboxChange = (field) => {
    setFormData({
      ...formData,
      [field]: !formData[field]
    });
  };
  
  async function handleFileUpload(file, name, mediaType) {
    console.log("Upload Profile Image ..... ");
    
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB in bytes
    if(file.size > maxSizeInBytes){
        setMsg("File size should not exceed 5MB");
        setAlertType('error');
        return;
    }
    
    setFileUploadLoader(true);
    const uploadFormData = new FormData();
    uploadFormData.append('media', file);
    uploadFormData.append('media_type', mediaType);

    console.log(`Bearer ${token}`);
    
    
    try {
      const res = await fetch(`https://vercertrabe.onrender.com/media/upload`, {
        method: "POST",
        body: uploadFormData,
        headers : {
          'Authorization': `Bearer ${token}`,
        }
      });
      
      const data = await res.json();
      console.log(res, data);
      setFileUploadLoader(false);
      
      if(res.ok === true) {
        setMsg("File uploaded successfully");
        setAlertType('success');

        if(name === "process_flow_diagram"){
          formData.process_flow_diagram = data.data.id
        }else if(name === "environmental_impact_assessment_report"){
          formData.environmental_impact_assessment_report = data.data.id
        }else if(name === "emissions_and_pollution_data"){
          formData.emissions_and_pollution_data = data.data.id
        }else if(name === "occupational_health_and_safety_policies"){
          formData.occupational_health_and_safety_policies = data.data.id
        }else if(name === "certificate_of_company_registration"){
          formData.certificate_of_company_registration = data.data.id
        }else if(name === "environmental_impact_assessment"){
          formData.environmental_impact_assessment = data.data.id
        }else if(name === "operational_process_flowchart"){
          formData.operational_process_flowchart = data.data.id
        }else if(name === "corporate_social_responsibility_report"){
          formData.corporate_social_responsibility_report = data.data.id
        }else if(name === "any_industry_certifications"){
          formData.any_industry_certifications = data.data.id
        }else if(name === "photo_of_production_site_facilities_or_warehouses"){
          formData.photo_of_production_site_facilities_or_warehouses = data.data.id
        }

        console.log("Okay");
      } else {
        setMsg("File upload wasn't successful");
        setAlertType('error');
      }
    } catch (error) {
        setMsg(error.response?.data?.message || 'Error uploading file');
        setAlertType('error');
    }finally{
      setFileUploadLoader(false)
    }
  }


  async function invoiceUpload(file, mediaType) {
    console.log("Upload Profile Image ..... ");
    
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB in bytes
    if(file.size > maxSizeInBytes){
        setMsg("File size should not exceed 5MB");
        setAlertType('error');
        return;
    }
    
    setFileUploadLoader(true);
    const uploadFormData = new FormData();
    uploadFormData.append('media', file);
    uploadFormData.append('media_type', mediaType);

    try {
      const res = await fetch(`https://vercertrabe.onrender.com/media/upload`, {
        method: "POST",
        body: uploadFormData,
        headers : {
          'Authorization': `Bearer ${token}`,
        }
      });
      
      const data = await res.json();
      console.log(res, data);
      setFileUploadLoader(false);
      
      if(res.ok === true) {
        setMsg("File uploaded successfully");
        setAlertType('success');
        formData.invoices.push(data.data.id)

      } else {
        setMsg("File upload wasn't successful");
        setAlertType('error');
      }
    } catch (error) {
        setMsg(error.response?.data?.message || 'Error uploading file');
        setAlertType('error');
    }finally{
      setFileUploadLoader(false)
    }
  }

  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
    submitApplication()
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitApplication = async () => {
    console.log(formData)
  }
  
  // Progress bar steps
  const steps = [
    { id: 1, name: 'Product Details', current: currentStep === 1 },
    { id: 2, name: 'Processing Information', current: currentStep === 2 },
    { id: 3, name: 'Local Value Added Metrics', current: currentStep === 3 },
    { id: 4, name: 'Environmental Impact', current: currentStep === 4 },
    { id: 5, name: 'Social Contribution', current: currentStep === 5 },
    { id: 6, name: 'Product Documents', current: currentStep === 6 },
    { id: 7, name: 'Suppliers Invoices', current: currentStep === 7 },
    { id: 8, name: 'Declaration', current: currentStep === 8 },
  ];
  
  return (
    <div className='cert-application'>
      {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
      <div 
        className="h-full w-full fixed top-0 left-0 z-[99] bg-opacity-70 backdrop-blur-sm" 
        style={{ background: "rgba(14, 14, 14, 0.58)" }}
      ></div>
      
      <div 
        className="bg-white fixed top-[50%] left-[50%] z-[100] rounded-md w-[1000px] max-h-[700px] overflow-y-auto" 
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-4">
          <button 
            className="bg-blue-900 text-white rounded-md p-2" 
            onClick={prevStep}
          >
            <IoArrowBackOutline />
          </button>
          
          <div className="flex-1 text-center">
            <div className="flex flex-col items-center justify-center">
              <img src="./logo.svg" alt="Logo" className="mb-2" />
              <h2 className="text-lg font-medium">New Certification Application</h2>
            </div>
          </div>
          
          <button 
            className="text-gray-500 text-2xl" 
            onClick={() => setCertificationApplication('')}
          >
            <IoCloseOutline />
          </button>
        </div>
        
        {/* Progress indicator */}
        <div className="flex justify-center space-x-2 px-4 py-2">
          {steps.map((step) => (
            <div key={step.id} className='text-center'>
              <div 
                className={`px-1 py-[2px] rounded text-xs ${
                  currentStep === step.id 
                    ? 'bg-ascent-color text-[#333333]' 
                    : currentStep > step.id 
                      ? 'bg-ascent-color text-[#333333]' 
                      : 'bg-[#F9F6EB] text-[#666666]'
                }`}
              ></div>
              <p 
                className={`px-1 py-1 rounded text-xs ${
                  currentStep === step.id 
                    ? 'text-[13px] text-[#333333]' 
                    : currentStep > step.id 
                      ? 'text-[13px] text-[#333333]' 
                      : 'text-[13px] text-[#666666]'
                }`}
              >
                {step.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* Form Content */}
        <div className="p-6">
          {/* Step 1: Product Details */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-lg font-medium text-center text-yellow-600">Product Details</h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                Enter the basic information about your product for certification
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#344054] mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="Enter product name"
                    value={formData.product_name}
                    onChange={(e) => handleInputChange('product_name', e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#344054] mb-1">
                    Product Category
                  </label>
                  <div className="relative">
                    <select
                      className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                      value={formData.product_category}
                      onChange={(e) => handleInputChange('product_category', e.target.value)}
                    >
                      <option value="Agro">Agro</option>
                      <option value="Technology">Technology</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Services">Services</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Step 2: Processing Information */}
          {currentStep === 2 && (
            <div>
              <h3 className="text-lg font-medium text-center text-yellow-600">Processing Information</h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                Tell us about your product's processing stage and export status
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Primary Raw Material(s) Used
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    placeholder="Enter raw materials"
                    value={formData.primary_materials_used}
                    onChange={(e) => handleInputChange('primary_materials_used', e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Source Location (country/region)
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                        value={formData.source_location}
                        onChange={(e) => handleInputChange('source_location', e.target.value)}
                      >
                        <option value="">select or enter</option>
                        <option value="Local">Local</option>
                        <option value="Regional">Regional</option>
                        <option value="International">International</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Do you own or lease the resource base?
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                        value={formData.do_you_own_or_lease}
                        onChange={(e) => handleInputChange('do_you_own_or_lease', e.target.value)}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Partially">Partially</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Stage of Value Addition Conducted Locally
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                        value={formData.stage_of_value_addition_conducted_locally}
                        onChange={(e) => handleInputChange('stage_of_value_addition_conducted_locally', e.target.value)}
                      >
                        <option value="Extraction, Refining">Extraction, Refining</option>
                        <option value="Processing">Processing</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Packaging">Packaging</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Final Product Value
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                        $
                      </span>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-r-md px-3 py-2"
                        value={formData.final_product_value}
                        onChange={(e) => handleInputChange('final_product_value', parseFloat(e.target.value))}
                      />
                      <div className="relative ml-2">
                        <select
                          className="border border-gray-300 rounded-md px-3 py-2 appearance-none"
                          defaultValue="USD"
                        >
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Annual Output Produced
                    </label>
                    <div className="relative">
                      <input
                        type='text'
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                        placeholder="1000 tons"
                        value={formData.annual_output}
                        onChange={(e) => handleInputChange('annual_output', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Annual Volume of Raw Material Utilized
                    </label>
                    <div className="relative">
                      <input
                          type='text'
                          className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                          placeholder="1200 tons"
                          value={formData.annual_volume_of_raw_material_utilized}
                          onChange={(e) => handleInputChange('annual_volume_of_raw_material_utilized', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Process Flow Diagram or Schematics of operations
                  </label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex flex-col items-center relative">
                  <input 
                    onChange={e => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileUpload(e.target.files[0], 'process_flow_diagram', 'photo');
                      }
                    }}
                   type="file" className='h-full w-full opacity-0 absolute top-0' />
                    <div className="p-2 rounded-full bg-gray-100 mb-2">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <p className="text-center text-xs">
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                        <br/>
                        <span className="text-gray-400">PDF/PNG/JPG (max: 800x400px)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Step 3: Local Value Added Metrics */}
          {currentStep === 3 && (
            <div>
              <h3 className="text-lg font-medium text-center text-yellow-600">Local Value Added Metrics</h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                Tell us about your product's local value added metrics
              </p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      % of Raw Material Processed Locally
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="50%"
                      value={formData.pct_of_material_processed_locally}
                      onChange={(e) => handleInputChange('pct_of_material_processed_locally', parseFloat(e.target.value))}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      % of Raw Materials Imported
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="46%"
                      value={formData.pct_of_material_imported}
                      onChange={(e) => handleInputChange('pct_of_material_imported', parseFloat(e.target.value))}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Annual Spend on Imported Raw Materials
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                        $
                      </span>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-r-md px-3 py-2"
                        value={formData.annual_spend_on_imported_raw_materials}
                        onChange={(e) => handleInputChange('annual_spend_on_imported_raw_materials', parseFloat(e.target.value))}
                      />
                      <div className="relative ml-2">
                        <select
                          className="border border-gray-300 rounded-md px-3 py-2 appearance-none"
                          defaultValue="USD"
                        >
                          <option value="USD">USD</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Annual Spend on Locally Sourced Raw Materials
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                        $
                      </span>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-r-md px-3 py-2"
                        value={formData.annual_spend_on_locally_sourced_materials}
                        onChange={(e) => handleInputChange('annual_spend_on_locally_sourced_materials', parseFloat(e.target.value))}
                      />
                      <div className="relative ml-2">
                        <select
                          className="border border-gray-300 rounded-md px-3 py-2 appearance-none"
                          defaultValue="USD"
                        >
                          <option value="USD">USD</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      % of Components/Inputs Sourced Locally
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="50%"
                      value={formData.pct_of_components_sourced_locally}
                      onChange={(e) => handleInputChange('pct_of_components_sourced_locally', parseFloat(e.target.value))}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      % of Components/Inputs Imported
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="50%"
                      value={formData.pct_of_components_imported}
                      onChange={(e) => handleInputChange('pct_of_components_imported', parseFloat(e.target.value))}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Total Work Force Size
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      value={formData.total_work_force}
                      onChange={(e) => handleInputChange('total_work_force', parseInt(e.target.value))}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      % of Local (National) Workforce
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="32%"
                      value={formData.pct_of_local_workforce}
                      onChange={(e) => handleInputChange('pct_of_local_workforce', parseFloat(e.target.value))}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Use of Local Suppliers
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                        value={formData.use_of_local_suppliers}
                        onChange={(e) => handleInputChange('use_of_local_suppliers', e.target.value)}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      List Major Local Suppliers/Partners
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="cornflour, crownflour"
                      value={formData.list_major_local_suppliers}
                      onChange={(e) => handleInputChange('list_major_local_suppliers', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Final Product Value
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                        $
                      </span>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-r-md px-3 py-2"
                        value={formData.final_product_cost}
                        onChange={(e) => handleInputChange('final_product_cost', parseFloat(e.target.value))}
                      />
                      <div className="relative ml-2">
                        <select
                          className="border border-gray-300 rounded-md px-3 py-2 appearance-none"
                          defaultValue="USD"
                        >
                          <option value="USD">USD</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Raw Material Cost
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                        $
                      </span>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-r-md px-3 py-2"
                        value={formData.raw_material_cost}
                        onChange={(e) => handleInputChange('raw_material_cost', parseFloat(e.target.value))}
                      />
                      <div className="relative ml-2">
                        <select
                          className="border border-gray-300 rounded-md px-3 py-2 appearance-none"
                          defaultValue="USD"
                        >
                          <option value="USD">USD</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Annual Expenditure on Local Procurement and Service
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="50%"
                      value={formData.annual_expenditure_on_local_procurement}
                      onChange={(e) => handleInputChange('annual_expenditure_on_local_procurement', parseFloat(e.target.value))}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Calculated Value Addition (%)
                    </label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="50%"
                      value={formData.calculated_value_addition}
                      onChange={(e) => handleInputChange('calculated_value_addition', parseFloat(e.target.value))}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Investment in Local Training or Infrastructure
                  </label>
                  <textarea 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 h-[120px] resize-none" 
                    value={formData.investment_in_local_training_or_infrastructure}
                    onChange={(e) => handleInputChange('investment_in_local_training_or_infrastructure', e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h3 className="text-lg font-medium text-center text-yellow-600">Environmental Impact & Sustainability</h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                Tell us about your product's environmental impact and sustainability
              </p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Annual Water Consumption Estimate (Litres)
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="Enter estimate"
                      value={formData.annual_water_consumption_estimate}
                      onChange={(e) => handleInputChange('annual_water_consumption_estimate', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Annual Energy Consumption Estimate (kWh) 
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="Enter estimate"
                      value={formData.annual_energy_consumption_estimate}
                      onChange={(e) => handleInputChange('annual_energy_consumption_estimate', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Green Technologies or Practices Used
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="Enter practices"
                      value={formData.green_technology_or_practices_used}
                      onChange={(e) => handleInputChange('green_technology_or_practices_used', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Compliance with National/International Standards
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                        value={formData.compliance_with_national_international_standards}
                        onChange={(e) => handleInputChange('compliance_with_national_international_standards', e.target.value)}
                      >
                        <option value="ISO14001">ISO14001</option>
                        <option value="ISO14002">ISO14002</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Describe Waste Management Practices
                  </label>
                  <textarea 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 h-[120px] resize-none" 
                    value={formData.waste_management_practices}
                    placeholder='Enter a description...'
                    onChange={(e) => handleInputChange('waste_management_practices', e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Environmental Impact Assessment Report (PDF)
                  </label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex flex-col items-center relative">
                  <input
                    onChange={e => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileUpload(e.target.files[0], 'environmental_impact_assessment_report', 'document');
                      }
                    }}
                    type="file" className='h-full w-full opacity-0 absolute top-0' />
                    <div className="p-2 rounded-full bg-gray-100 mb-2">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <p className="text-center text-xs">
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                        <br/>
                        <span className="text-gray-400">PDF/PNG/JPG (max: 800x400px)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Emissions and Pollution Data (PDF)
                  </label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex flex-col items-center relative">
                    <input
                      onChange={e => {
                        if (e.target.files && e.target.files.length > 0) {
                          handleFileUpload(e.target.files[0], 'emissions_and_pollution_data', 'document');
                        }
                      }}
                      type="file" className='h-full w-full opacity-0 absolute top-0' />
                    <div className="p-2 rounded-full bg-gray-100 mb-2">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <p className="text-center text-xs">
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                        <br/>
                        <span className="text-gray-400">PDF/PNG/JPG (max: 800x400px)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <h3 className="text-lg font-medium text-center text-yellow-600">Social & Community Contribution</h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                Tell us about your product's social and community contribution
              </p>
              
              <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Do you run or fund community Development Project
                    </label>
                    <div className="relative">
                        <select
                            className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                            value={formData.do_you_run_or_fund_community_development_project}
                            onChange={(e) => handleInputChange('do_you_run_or_fund_community_development_project', e.target.value)}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    If Yes, Describe briefly
                  </label>
                  <textarea 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 h-[120px] resize-none" 
                    value={formData.community_development_project_description}
                    placeholder='Enter a description...'
                    onChange={(e) => handleInputChange('community_development_project_description', e.target.value)}
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Estimated annual tax paid to Host Country
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                        $
                      </span>
                      <input
                        type="number"
                        className="w-full border border-gray-300 rounded-r-md px-3 py-2"
                        value={formData.estimated_annual_tax_paid_to_host_country}
                        onChange={(e) => handleInputChange('estimated_annual_tax_paid_to_host_country', parseFloat(e.target.value))}
                      />
                      <div className="relative ml-2">
                        <select
                          className="border border-gray-300 rounded-md px-3 py-2 appearance-none"
                          defaultValue="USD"
                        >
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="GBP">GBP</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Employee Welfare Programs
                    </label>
                    <div className="relative">
                      <select
                        className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                        value={formData.employee_welfare_program}
                        onChange={(e) => handleInputChange('employee_welfare_program', e.target.value)}
                      >
                        <option value="ISO14001">ISO14001</option>
                        <option value="ISO14002">ISO14002</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Occupational Health and Safety Policies (PDF)
                  </label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex flex-col items-center relative">
                  <input
                    onChange={e => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileUpload(e.target.files[0], 'occupational_health_and_safety_policies', 'document');
                      }
                    }}
                    type="file" className='h-full w-full opacity-0 absolute top-0' />
                    <div className="p-2 rounded-full bg-gray-100 mb-2">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <p className="text-center text-xs">
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                        <br/>
                        <span className="text-gray-400">PDF/PNG/JPG (max: 800x400px)</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Grievance Mechanism Description
                    </label>
                    <div className="relative">
                        <select
                            className="w-full border border-gray-300 rounded-md px-3 py-2 appearance-none"
                            value={formData.grievance_mechanism_description}
                            onChange={(e) => handleInputChange('grievance_mechanism_description', e.target.value)}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    If Yes, Describe briefly
                  </label>
                  <textarea 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 h-[120px] resize-none" 
                    value={formData.grievance_mechanism_details}
                    placeholder='Enter a description...'
                    onChange={(e) => handleInputChange('grievance_mechanism_details', e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div>
              <h3 className="text-lg font-medium text-center text-yellow-600">Product Documents</h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                Please upload all document relating to your product
              </p>
              
              <div className="space-y-4">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Certificate of Company Registration
                  </label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex flex-col items-center relative">
                  <input
                    onChange={e => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileUpload(e.target.files[0], 'certificate_of_company_registration', 'document');
                      }
                    }}
                    type="file" className='h-full w-full opacity-0 absolute top-0' />
                    <div className="p-2 rounded-full bg-gray-100 mb-2">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <p className="text-center text-xs">
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                        <br/>
                        <span className="text-gray-400">PDF/PNG/JPG (max: 800x400px)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Environmental Impact Assessment Report (PDF)
                  </label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex flex-col items-center relative">
                  <input
                    onChange={e => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileUpload(e.target.files[0], 'environmental_impact_assessment', 'document');
                      }
                    }}
                    type="file" className='h-full w-full opacity-0 absolute top-0' />
                    <div className="p-2 rounded-full bg-gray-100 mb-2">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <p className="text-center text-xs">
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                        <br/>
                        <span className="text-gray-400">PDF/PNG/JPG (max: 800x400px)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Operational Process Flowchart
                  </label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex flex-col items-center relative">
                  <input
                    onChange={e => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileUpload(e.target.files[0], 'operational_process_flowchart', 'document');
                      }
                    }}
                    type="file" className='h-full w-full opacity-0 absolute top-0' />
                    <div className="p-2 rounded-full bg-gray-100 mb-2">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <p className="text-center text-xs">
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                        <br/>
                        <span className="text-gray-400">PDF/PNG/JPG (max: 800x400px)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Corporate Social Responsibility Report or Community Project Evidence
                  </label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex flex-col items-center relative">
                  <input
                    onChange={e => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileUpload(e.target.files[0], 'corporate_social_responsibility_report', 'document');
                      }
                    }}
                    type="file" className='h-full w-full opacity-0 absolute top-0' />
                    <div className="p-2 rounded-full bg-gray-100 mb-2">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <p className="text-center text-xs">
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                        <br/>
                        <span className="text-gray-400">PDF/PNG/JPG (max: 800x400px)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Any Industry Certifications
                  </label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex flex-col items-center relative">
                  <input
                    onChange={e => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileUpload(e.target.files[0], 'any_industry_certifications', 'document');
                      }
                    }}
                    type="file" className='h-full w-full opacity-0 absolute top-0' />
                    <div className="p-2 rounded-full bg-gray-100 mb-2">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <p className="text-center text-xs">
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                        <br/>
                        <span className="text-gray-400">PDF/PNG/JPG (max: 800x400px)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Photos of Production Site, Facilities or Warehouses (Optional)
                  </label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex flex-col items-center relative">
                  <input
                    onChange={e => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileUpload(e.target.files[0], 'photo_of_production_site_facilities_or_warehouses', 'document');
                      }
                    }}
                    type="file" className='h-full w-full opacity-0 absolute top-0' />
                    <div className="p-2 rounded-full bg-gray-100 mb-2">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <p className="text-center text-xs">
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                        <br/>
                        <span className="text-gray-400">PDF/PNG/JPG (max: 800x400px)</span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {currentStep === 7 && (
            <div>
              <h3 className="text-lg font-medium text-center text-yellow-600">Suppliers Invoices</h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                Please upload all the suppliers invoices for the product production
              </p>
              
              <div className="space-y-4">

                <div>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md px-6 pt-5 pb-6 flex flex-col items-center relative">
                  <input
                    onChange={e => {
                      if (e.target.files && e.target.files.length > 0) {
                        invoiceUpload(e.target.files[0], 'document');
                      }
                    }}
                    type="file" className='h-full w-full opacity-0 absolute top-0' />
                    <div className="p-2 rounded-full bg-gray-100 mb-2">
                      <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <p className="text-center text-xs">
                        <span className="text-blue-500 hover:text-blue-700 cursor-pointer">Click to upload</span>
                        <span className="text-gray-500"> or drag and drop</span>
                        <br/>
                        <span className="text-gray-400">PDF/PNG/JPG (max: 800x400px)</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  {
                    formData.invoices.map((invoice, index) => (
                      <div className="border border-gray-200 rounded-lg py-4 px-6 flex flex-col items-center justify-between shadow-sm my-2">
                          <div className='flex justify-between items-center w-full'>
                              <div className="flex items-center space-x-3 text-[#344054]">
                                  <img src="./file-upload.svg" alt="" />
                                  {/* <div className="flex flex-col">
                                      <span className="font-medium">Cement Invoice.pdf</span>
                                      <span className="text-sm text-gray-500">200kb</span>
                                  </div> */}
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                  <div
                                    onClick={() => {
                                      // Create a copy of the current formData
                                      const updatedFormData = {...formData};
                                      // Remove the invoice at the current index
                                      updatedFormData.invoices = formData.invoices.filter((_, i) => i !== index);
                                      // Update the formData state
                                      setFormData(updatedFormData);
                                    }}
                                    className="bg-primary-color rounded-full p-1">
                                      <BiTrashAlt size={16} className="text-white" />
                                  </div>
                              </div>
                          </div>
                          <div className="flex items-center justify-center gap-4 w-full h-[7px] mx-5 mt-3">
                              <div className="bg-primary-color h-full rounded-full w-full" />
                              <span className="text-sm text-[#344054]">100%</span>
                          </div>
                      </div>
                    ))
                  }
                </div>
                
              </div>
            </div>
          )}

          {currentStep === 8 && (
            <div>
              <h3 className="text-lg font-medium text-center text-yellow-600">Declaration</h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                {/* Please upload all the suppliers invoices for the product production */}
              </p>
              
              <div className="space-y-4 text-[#344054]">

                <div className='flex items-center gap-2'>
                    <input type="checkbox" />
                    <p>I declare that the information provided in this form is true, complete and correct to the best of my knowledge</p>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" />
                    <p>I agree to allow Valcertra or its authorized agents to carry out inspections, audits or third party verifications as required</p>
                </div>
                <div className='flex items-center gap-2'>
                    <input type="checkbox" />
                    <p>I commit to maintaining compliance with all LVA certification standards and to continuous Improvement </p>
                </div>

                <div>
                    <p>
                        Authorized Signatory Name: ____________________________
                    </p>
                </div>
                <div>
                    <p>
                        Designation/Title: ____________________________
                    </p>
                </div>

                
              </div>
            </div>
          )}
        </div>
        
        {/* Navigation Footer */}
        <div className='border-t flex items-center justify-between mx-5 py-5'>
          <div className='text-[#344054]'>
            <p>Page {currentStep} of {totalSteps}</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <button 
              onClick={prevStep} 
              className={
                currentStep === 1 
                  ? 'text-[#D0D5DD] border rounded-[4px] py-[4px] px-3 cursor-not-allowed font-[500]' 
                  : 'font-[500] text-primary-color border rounded-[4px] py-[4px] px-3'
              }
            >
              Previous
            </button>
            {
                currentStep === totalSteps ? 
                <button 
                    onClick={submitApplication}
                    className='font-[500] bg-primary-color text-white border rounded-[4px] py-[4px] px-3'
                >
                    Proceed to Payment
                </button>
                :
                <button 
                    onClick={nextStep} 
                    className='font-[500] text-primary-color border rounded-[4px] py-[4px] px-3'
                >
                    Next
                </button>
            }
          </div>
        </div>
      </div>
      {
        fileUploadLoader &&
        <div style={{position:'fixed', width:'100%', left:'0', top:'0', zIndex:'9999', display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', background:"rgba(18, 18, 18, 0.8)" }}>
            <div className="bg-white" style={{ borderRadius:'10px' }}>
                {/* <i className=' ri-close-fill block text-[1.2rem] text-end mt-[1rem] mr-[1rem] cursor-pointer'></i> */}
                <div className="flex items-center justify-between mt-[1rem] px-[2rem] mb-[2rem] flex-col" style={{ padding:'2rem', textAlign:'center' }} >
                    <img src='./loader.gif' style={{ height:'40px', width:'40px', margin:'12px auto 30px' }} />
                    <p className='text-gray-500 text-[15px] mb-2 text-center'>File Upload in progress, please do not refresh the page</p>
                </div>
            </div>
        </div>
      }
    </div>
  );
}