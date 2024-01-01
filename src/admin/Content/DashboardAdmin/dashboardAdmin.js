import "./_cards.scss";
import "./_charts.scss";
import { memo, useEffect, useRef, useState } from "react";
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import { Link } from "react-router-dom";
import TopDoctorsTable from "./TopDoctorsTable/TopDoctorsTable";
import TopUsersTable from "./TopUsersTable/TopUsersTable";
import { 
  fetchStatisticalAppointment,
  fetchTopDoctorAppointment,
  fetchTopUserAppointment
} from "../../../service/AdminService";
const DashboardAdmin = () => {
  const [totalAppointment, setTotalAppointment] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [numAppointmentNotConfirm, setNumAppointmentNotConfirm] = useState(0);
  const [numAppointmentCancel, setNumAppointmentCancel] = useState(0);
  const [time_row, setTimeRow] = useState([]);
  const [revenue_col, setRevenueCol] = useState([]);
  const [selectedInterval, setSelectedInterval] = useState('week');
  const [topDoctor, setTopDoctor] = useState([]);
  const [topUser, setTopUser] = useState([]);
  const chartRef = useRef(null);

  const convert = {'week': 'tuần', 'month': 'tháng', 'year': 'năm'};

  const getStatisticalAppointment = async () => {
    let res = await fetchStatisticalAppointment(selectedInterval);
    if (res) {
      console.log(res);
      setTotalAppointment(res?.total_appointment);
      setRevenue(res?.revenue);
      setNumAppointmentNotConfirm(res?.num_appointment_not_confirm);
      setNumAppointmentCancel(res?.num_appointment_cancel);
      setTimeRow(res?.time_row);
      setRevenueCol(res?.revenue_col);
      // setCategories(res?.results);
    }
  };
  const getTable = async () => {
    let res = await fetchTopDoctorAppointment(selectedInterval);
    if (res) {
      console.log(res);
      setTopDoctor(res);
    }
    res = await fetchTopUserAppointment(selectedInterval);
    if (res) {
      console.log(res);
      setTopUser(res);
    }
  };
  useEffect(() => {
    getStatisticalAppointment();
    getTable();
  // eslint-disable-next-line
  }, [selectedInterval]); 
  useEffect(() => {
    const createOrUpdateChart = () => {
      const ctx = chartRef.current.getContext('2d');
      const existingChart = chartRef.current.chart;

      if (existingChart) {
        existingChart.destroy();
      }

      const newChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: time_row,
          datasets: [{
            label: 'Revenue',
            data: revenue_col,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }],
        },
        options: {
          plugins: {
            datalabels: {
              anchor: 'end',
              align: 'end',
              color: 'black',
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Revenue',
              },
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    };

    createOrUpdateChart();

    // return () => {
    //   // Cleanup function to destroy the chart when the component unmounts
    //   const existingChart = chartRef.current.chart;
    //   if (existingChart) {
    //     existingChart.destroy();
    //   }
    // };
  // eslint-disable-next-line
  }, [time_row, revenue_col]);
  const handleIntervalChange = (event) => {
    setSelectedInterval(event.target.value);
  };

  return (
    <div>
      <div class="container-fluid">
        <div className="interval-select">
          <label htmlFor="intervalSelect">Chọn khoảng thời gian thống kê:</label>
          <select id="intervalSelect" value={selectedInterval} onChange={handleIntervalChange}>
            <option value="all">Tất cả</option>
            <option value="week">Theo Tuần</option>
            <option value="month">Theo Tháng</option>
            <option value="year">Theo Năm</option>
          </select>
        </div>
        <div class="row mt-4">
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Tổng số lịch hẹn (hoàn thành)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      {totalAppointment}
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Doanh thu ({selectedInterval === 'all' ? 'Tổng' : 'Trong ' + convert[selectedInterval]})
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      {revenue} VNĐ
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Số lịch hẹn chưa xác nhận
                    </div>
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          {numAppointmentNotConfirm}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Số lịch hẹn đã huỷ
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{numAppointmentCancel}</div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-8 col-lg-7" style={{ width: '100%' }}>
            <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">
                  Biểu đồ thống kê doanh thu
                </h6>
              </div>
              <div class="card-body">
                <div class="chart-area">
                  {/* <canvas id="myAreaChart"></canvas> */}
                  <canvas id="myAreaChart" ref={chartRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="col-lg-6">
            {/* bảng bác sĩ được nhiều người đặt lịch hẹn nhất */}
            <TopDoctorsTable topDoctor={topDoctor} />
          </div>
          <div className="col-lg-6">
            {/* bảng người dùng đặt lịch hẹn nhiều nhất */}
            <TopUsersTable topUsers={topUser} />
          </div>
        </div>
    
      </div>
    </div>
  );
};
export default memo(DashboardAdmin);
