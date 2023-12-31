import React, { Component } from "react";

class CustomChart extends Component {
  render() {
    const {
      labels,
      values,
      colors,
      height = 8,
      borderRadius,
      showSeparatorValue,
      position = null,
    } = this.props;

    const sectionsPercentage = [];
    const finalValue = values[values.length - 1];
    const adjustedFinalValue = finalValue - values[0];

    values.forEach(
      (v, i) =>
        i < values.length - 1 &&
        adjustedFinalValue !== 0 &&
        sectionsPercentage.push(
          (100 * (values[i + 1] - v)) / adjustedFinalValue,
        ),
    );

    const separatorValues = values.filter(
      (_, i) => i !== 0 && i !== values.length - 1,
    );

    const circleValue =
      position != null &&
      position >= values[0] &&
      position <= finalValue &&
      adjustedFinalValue !== 0
        ? (100 * (position - values[0])) / adjustedFinalValue
        : null;

    const differenceCircleWithProgress = 5;
    const circleHeight = height + differenceCircleWithProgress;
    const paddingWithLabel = 10;

    return (
      <>
        {showSeparatorValue && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {sectionsPercentage.map((w, i) => (
              <div
                key={i}
                style={{ width: `${w}%`, backgroundColor: "transparent" }}
              >
                {i > 0 && (
                  <span style={{ fontSize: 8 }}>{separatorValues[i - 1]}</span>
                )}
              </div>
            ))}
          </div>
        )}
        <div
          style={{
            paddingTop: paddingWithLabel,
            paddingBottom: paddingWithLabel,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "hidden",
              height,
              borderRadius: borderRadius || height / 2,
            }}
          >
            {sectionsPercentage.map((w, i) => (
              <div
                key={i}
                style={{ width: `${w}%`, backgroundColor: colors[i], height }}
              />
            ))}
          </div>
          {!!circleValue && (
            <div
              style={{
                position: "absolute",
                backgroundColor: "black",
                borderColor: "white",
                borderWidth: 1,
                height: circleHeight,
                width: circleHeight,
                borderRadius: circleHeight / 2,
                left: `calc(${circleValue}%)`,
                top: Math.abs(
                  paddingWithLabel - differenceCircleWithProgress / 2,
                ),
              }}
            />
          )}
        </div>
        {!!labels && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {sectionsPercentage.map((w, i) => (
              <span
                key={i}
                style={{ width: `${w}%`, textAlign: "center", fontSize: 8 }}
              >
                {labels[i]}
              </span>
            ))}
          </div>
        )}
      </>
    );
  }
}

export default CustomChart;
