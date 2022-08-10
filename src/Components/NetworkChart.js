//#region map import
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
//#endregion
import React, { useLayoutEffect } from "react";

import logo from "../Assets/Images/Avatar.png";
import avatar from "../Assets/Images/avatar27.png";
import r404 from "../Assets/Images/404.svg";

var data = {
  value: 0,
  children: [
    {
      name: "Flora",
      image: logo,
      children: [
        {
          name: "Black Tea",
          image: logo,
          value: 1,
        },
        {
          name: "Floral",
          image: logo,
          children: [
            {
              name: "Chamomile",
              value: 1,
              image: logo,
            },
            {
              name: "Rose",
              image: logo,
              value: 1,
            },
            {
              name: "Jasmine",
              image: logo,
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Fruity",
      image: r404,
      children: [
        {
          name: "Berry",
          image: avatar,
          children: [
            {
              name: "Blackberry",
              value: 1,
            },
            {
              name: "Raspberry",
              value: 1,
            },
            {
              name: "Blueberry",
              image: avatar,
              value: 1,
            },
            {
              name: "Strawberry",
              value: 1,
            },
          ],
        },
        {
          name: "Dried Fruit",
          children: [
            {
              name: "Raisin",
              value: 1,
            },
            {
              name: "Prune",
              image: avatar,
              value: 1,
            },
          ],
        },
        {
          name: "Other Fruit",
          children: [
            {
              name: "Coconut",
              value: 1,
            },
            {
              name: "Cherry",
              value: 1,
            },
            {
              name: "Pomegranate",
              image: avatar,
            },
            {
              name: "Pineapple",
              image: avatar,
            },
            {
              name: "Grape",
              image: avatar,
            },
            {
              name: "Apple",
              image: avatar,
            },
            {
              name: "Peach",
              image: avatar,
            },
            {
              name: "Pear",
              image: avatar,
            },
          ],
        },
        {
          name: "Citrus Fruit",
          children: [
            {
              name: "Grapefruit",
              image: avatar,
            },
            {
              name: "Orange",
              image: avatar,
            },
            {
              name: "Lemon",
              image: avatar,
            },
            {
              name: "Lime",
              image: avatar,
            },
          ],
        },
      ],
    },
    {
      name: "Sour/Fermented",
      children: [
        {
          name: "Sour",
          children: [
            {
              name: "Sour Aromatics",
              image: avatar,
            },
            {
              name: "Acetic Acid",
              image: avatar,
            },
            {
              name: "Butyric Acid",
              image: avatar,
            },
            {
              name: "Isovaleric Acid",
              image: avatar,
            },
            {
              name: "Citric Acid",
              image: avatar,
            },
            {
              name: "Malic Acid",
              image: avatar,
            },
          ],
        },
        {
          name: "Alcohol/Fremented",
          children: [
            {
              name: "Winey",
              image: avatar,
            },
            {
              name: "Whiskey",
              image: avatar,
            },
            {
              name: "Fremented",
              image: avatar,
            },
            {
              name: "Overripe",
              image: avatar,
            },
          ],
        },
      ],
    },
    {
      name: "Green/Vegetative",
      children: [
        {
          name: "Olive Oil",
          image: avatar,
        },
        {
          name: "Raw",
          image: avatar,
        },
        {
          name: "Green/Vegetative",
          children: [
            {
              name: "Under-ripe",
              image: avatar,
            },
            {
              name: "Peapod",
              image: avatar,
            },
            {
              name: "Fresh",
              image: avatar,
            },
            {
              name: "Dark Green",
              image: avatar,
            },
            {
              name: "Vegetative",
              image: avatar,
            },
            {
              name: "Hay-like",
              image: avatar,
            },
            {
              name: "Herb-like",
              image: avatar,
            },
          ],
        },
        {
          name: "Beany",
          image: avatar,
        },
      ],
    },
    {
      name: "Other",
      image: avatar,
      children: [
        {
          name: "Papery/Musty",
          children: [
            {
              name: "Stale",
              image: avatar,
            },
            {
              name: "Cardboard",
              image: avatar,
            },
            {
              name: "Papery",
              image: avatar,
            },
            {
              name: "Woody",
              image: avatar,
            },
            {
              name: "Moldy/Damp",
              image: avatar,
            },
            {
              name: "Musty/Dusty",
              image: avatar,
            },
            {
              name: "Musty/Earthy",
              image: avatar,
            },
            {
              name: "Animalic",
              image: avatar,
            },
            {
              name: "Meaty Brothy",
              image: avatar,
            },
            {
              name: "Phenolic",
              image: avatar,
            },
          ],
        },
        {
          name: "Chemical",
          image: avatar,
          children: [
            {
              name: "Bitter",
              image: avatar,
            },
            {
              name: "Salty",
              value: 1,
            },
            {
              name: "Medicinal",
              value: 1,
            },
            {
              name: "Petroleum",
              value: 1,
            },
            {
              name: "Skunky",
              value: 1,
            },
            {
              name: "Rubber",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Roasted",
      children: [
        {
          name: "Pipe Tobacco",
          value: 1,
        },
        {
          name: "Tobacco",
          value: 1,
        },
        {
          name: "Burnt",
          children: [
            {
              name: "Acrid",
              value: 1,
            },
            {
              name: "Ashy",
              value: 1,
            },
            {
              name: "Smoky",
              value: 1,
            },
            {
              name: "Brown, Roast",
              value: 1,
            },
          ],
        },
        {
          name: "Cereal",
          children: [
            {
              name: "Grain",
              value: 1,
            },
            {
              name: "Malt",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Spices",
      children: [
        {
          name: "Pungent",
          value: 1,
        },
        {
          name: "Pepper",
          value: 1,
        },
        {
          name: "Brown Spice",
          children: [
            {
              name: "Anise",
              value: 1,
            },
            {
              name: "Nutmeg",
              value: 1,
            },
            {
              name: "Cinnamon",
              value: 1,
            },
            {
              name: "Clove",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Nutty/Cocoa",
      children: [
        {
          name: "Nutty",
          children: [
            {
              name: "Peanuts",
              value: 1,
            },
            {
              name: "Hazelnut",
              value: 1,
            },
            {
              name: "Almond",
              value: 1,
            },
          ],
        },
        {
          name: "Cocoa",
          children: [
            {
              name: "Chocolate",
              value: 1,
            },
            {
              name: "Dark Chocolate",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Sweet",
      children: [
        {
          name: "Brown Sugar",
          children: [
            {
              name: "Molasses",
              value: 1,
            },
            {
              name: "Maple Syrup",
              value: 1,
            },
            {
              name: "Caramelized",
              value: 1,
            },
            {
              name: "Honey",
              value: 1,
            },
          ],
        },
        {
          name: "Vanilla",
          value: 1,
        },
        {
          name: "Vanillin",
          value: 1,
        },
        {
          name: "Overall Sweet",
          value: 1,
        },
        {
          name: "Sweet Aromatics",
          value: 1,
        },
      ],
    },
  ],
};

function NetworkChart() {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");
    root.current = root;

    // Create wrapper container
    var container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    var series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        topDepth: 1,
        initialDepth: 1,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        idField: "name",
        linkWithField: "linkWith",
        manyBodyStrength: -10,
        centerStrength: 0.8,
      })
    );

    series.get("colors").setAll({
      step: 2,
    });

    series.links.template.set("strength", 0.5);

    // Use template.setup function to prep up node with an image
    series.nodes.template.setup = function (target) {
      target.events.on("dataitemchanged", function (ev) {
        target.dataItem.on("circle", function (circle) {
          circle.on("radius", function (radius, circle) {
            const a = am5.Picture.new(root, {
              width: circle.get("radius") * 2.25,
              height: circle.get("radius") * 2.25,
              centerX: am5.percent(50),
              centerY: am5.percent(50),
              src: ev.target.dataItem.dataContext.image,
            });

            var maskCircle = target.children.push(
              am5.Circle.new(root, {
                radius: circle.get("radius"),
              })
            );

            // only containers can be masked, so we add image to another container
            var imageContainer = target.children.push(
              am5.Container.new(root, {
                mask: maskCircle,
              })
            );

            var pictureList = [];
            imageContainer.children.each((v, i) => {
              v.className === "Picture" && pictureList.push(i);
            });
            pictureList.forEach((i) => imageContainer.children.removeIndex(i));

            var icon = imageContainer.children.push(a);
          });
        });
      });
    };

    // // Add an ellipsis to node
    // series.nodes.template.setup = function (target) {
    //   target.events.once("dataitemchanged", function (ev) {
    //     let target = ev.target;
    //     target.dataItem.on("circle", function (circle) {
    //       circle.on("radius", function (radius, circle) {
    //         let ellipsis = circle.getPrivate("customData");
    //         if (ellipsis) {
    //           ellipsis.setAll({
    //             radiusX: circle.get("radius"),
    //             radiusY: circle.get("radius") * 0.6,
    //           });
    //         } else {
    //           ellipsis = target.children.unshift(
    //             am5.Ellipse.new(root, {
    //               radiusX: circle.get("radius"),
    //               radiusY: circle.get("radius") * 0.6,
    //               centerX: am5.percent(50),
    //               centerY: am5.percent(50),
    //               fill: circle.get("fill"),
    //             })
    //           );
    //           circle.setPrivate("customData", ellipsis);
    //         }
    //       });
    //     });
    //   });
    // };

    series.data.setAll([data]);

    series.set("selectedDataItem", series.dataItems[0]);

    // Make stuff animate on load
    series.appear(1000, 100);

    /**
     * ---------------------------------------
     * This demo was created using amCharts 5.
     *
     * For more information visit:
     * https://www.amcharts.com/
     *
     * Documentation is available at:
     * https://www.amcharts.com/docs/v5/
     * ---------------------------------------
     */

    // // Create root and chart
    // var root = am5.Root.new("chartdiv");
    // root.current = root;
    // // root.setThemes([am5themes_Animated.new(root)]);

    // var container = root.container.children.push(
    //   am5.Container.new(root, {
    //     width: am5.percent(100),
    //     height: am5.percent(100),
    //     layout: root.verticalLayout,
    //   })
    // );

    // var series = container.children.push(
    //   am5hierarchy.ForceDirected.new(root, {
    //     downDepth: 1,
    //     initialDepth: 1,
    //     topDepth: 0,
    //     valueField: "value",
    //     categoryField: "name",
    //     childDataField: "children",
    //     xField: "x",
    //     yField: "y",
    //     minRadius: 30,
    //     manyBodyStrength: -40,
    //   })
    // );

    // // Disable circles
    // series.circles.template.set("forceHidden", true);
    // series.outerCircles.template.set("forceHidden", true);

    // // ... except for central node
    // series.circles.template.adapters.add(
    //   "forceHidden",
    //   function (forceHidden, target) {
    //     return target.dataItem.get("depth") == 0 ? false : forceHidden;
    //   }
    // );

    // // Set up labels
    // series.labels.template.setAll({
    //   fill: am5.color(0x000000),
    //   y: 45,
    //   //y: am5.percent(10),
    //   oversizedBehavior: "none",
    // });

    // // Use adapter to leave central node label centered
    // series.labels.template.adapters.add("y", function (y, target) {
    //   return target.dataItem.get("depth") == 0 ? 0 : y;
    // });

    // // Use template.setup function to prep up node with an image
    // series.nodes.template.setup = function (target) {
    //   target.events.on("dataitemchanged", function (ev) {
    //     var icon = target.children.push(
    //       am5.Picture.new(root, {
    //         width: 70,
    //         height: 70,
    //         centerX: am5.percent(50),
    //         centerY: am5.percent(50),
    //         src: ev.target.dataItem.dataContext.image,
    //       })
    //     );
    //   });
    // };

    // series.data.setAll([data]);

    // // series.data.setAll([
    // //   {
    // //     name: "Browsers",
    // //     x: am5.percent(50),
    // //     y: am5.percent(50),
    // //     children: [
    // //       {
    // //         name: "Chrome",
    // //         value: 1,
    // //         image:
    // //           logo,
    // //       },
    // //       {
    // //         name: "Firefox",
    // //         value: 1,
    // //         image:
    // //           "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_firefox.svg",
    // //       },
    // //       {
    // //         name: "IE",
    // //         value: 1,
    // //         image:
    // //           "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_ie.svg",
    // //       },
    // //       {
    // //         name: "Safari",
    // //         value: 1,
    // //         image:
    // //           "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_safari.svg",
    // //       },
    // //       {
    // //         name: "Opera",
    // //         value: 1,
    // //         image:
    // //           "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_opera.svg",
    // //       },
    // //     ],
    // //   },
    // // ]);

    // series.set("selectedDataItem", series.dataItems[0]);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      id="chartdiv"
      className="chartContainer"
    ></div>
  );
}

export default NetworkChart;
