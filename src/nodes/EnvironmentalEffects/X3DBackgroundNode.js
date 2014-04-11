/** @namespace x3dom.nodeTypes */
/*
 * X3DOM JavaScript Library
 * http://www.x3dom.org
 *
 * (C)2009 Fraunhofer IGD, Darmstadt, Germany
 * Dual licensed under the MIT and GPL
 */

x3dom.registerNodeType(
    "X3DBackgroundNode",
    "EnvironmentalEffects",
    defineClass(x3dom.nodeTypes.X3DBindableNode,
        
        /**
         * Constructor for X3DBackgroundNode
         * @constructs x3dom.nodeTypes.X3DBackgroundNode
         * @x3d 3.3
         * @component EnvironmentalEffects
         * @status full
         * @extends x3dom.nodeTypes.X3DBindableNode
         * @param {Object} [ctx=null] - context object, containing initial settings like namespace
         * @classdesc X3DBackgroundNode is the abstract type from which all backgrounds inherit. X3DBackgroundNode is a
         * bindable node that, when bound, defines the panoramic background for the scene.
         */
        function (ctx) {
            x3dom.nodeTypes.X3DBackgroundNode.superClass.call(this, ctx);

            var trans = (ctx && ctx.autoGen) ? 1 : 0;

            /**
             * Credentials
             * @var {SFBool} withCredentials
             * @memberof x3dom.nodeTypes.X3DBackgroundNode
             * @initvalue false
             * @field x3d
             * @instance
             */
            this.addField_SFBool(ctx, 'withCredentials', false);

            /**
             * Color of the ground
             * @var {MFColor} groundColor
             * @memberof x3dom.nodeTypes.X3DBackgroundNode
             * @initvalue (0,0,0)
             * @range [0,1]
             * @field x3d
             * @instance
             */
            this.addField_MFColor(ctx, 'groundColor', []);

            /**
             * Angle of the ground
             * @var {MFFloat} groundAngle
             * @memberof x3dom.nodeTypes.X3DBackgroundNode
             * @initvalue []
             * @range [0, pi]
             * @field x3d
             * @instance
             */
            this.addField_MFFloat(ctx, 'groundAngle', []);

            /**
             * Color of the sky
             * @var {MFColor} skyColor
             * @memberof x3dom.nodeTypes.X3DBackgroundNode
             * @initvalue (0,0,0)
             * @range [0,1]
             * @field x3d
             * @instance
             */
            this.addField_MFColor(ctx, 'skyColor', [new x3dom.fields.SFColor(0,0,0)]);

            /**
             * Angle of the sky
             * @var {MFFloat} skyAngle
             * @memberof x3dom.nodeTypes.X3DBackgroundNode
             * @initvalue []
             * @range [0, pi]
             * @field x3d
             * @instance
             */
            this.addField_MFFloat(ctx, 'skyAngle', []);

            /**
             * Transparency of the background
             * @var {SFFloat} transparency
             * @memberof x3dom.nodeTypes.X3DBackgroundNode
             * @initvalue 0/1
             * @range [0,1]
             * @field x3dom
             * @instance
             */
            this.addField_SFFloat(ctx, 'transparency', trans);

            this._dirty = true;
        
        },
        {
            getSkyColor: function() {
                return new x3dom.fields.SFColor(0,0,0);
            },
            getTransparency: function() {
                return 0;
            },
            getTexUrl: function() {
                return [];
            }
        }
    )
);